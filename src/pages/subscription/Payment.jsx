import React, { useMemo, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { API } from "../../Host";
import { toast } from "react-toastify";
import countryList from "react-select-country-list";
import { FaCaretDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const planSchema = yup.object().shape({
  fname: yup.string().required("fname is required"),
  lname: yup.string().required("lname is required"),
  address: yup.string().required("Address  is required"),
  email: yup.string().email().required("Email Id  is required"),
  country: yup
    .string()
    .test(
      "not-select",
      "Please select an Country",
      (value) => value !== "" && value !== "Select  Country"
    ),
});

const Payment = () => {
  const options = useMemo(() => countryList().getData(), []);
  const [paymentMethod, setPaymentMethod] = useState("");
  const location = useLocation();
  const amount = location?.state?.amount * 100;
  const receipt = location?.state?.receipt;

  console.log(amount, receipt);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(planSchema),
  });

  const onSubmit = async (data) => {
    if (!paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }
  
    if (paymentMethod === "stripe") {
      await startStripe(data);
    } else if (paymentMethod === "razorpay") {
      await startRazorpay(data);
    }
  };

  const startStripe = async (data) => {
    let planId = 'price_1Pd8mq01PbsRdqnLHOa9bhU1';
    const dataToSend = {
      planId: planId,
    };
    try {
      const postURL = API + "/api/stripepayment";
      const res = await axios.post(postURL, dataToSend);
      console.log(res.data.url);
      localStorage.setItem("stripe", res.data.id);
      localStorage.setItem("method", "stripe");
      localStorage.setItem("plan", 'FREE');
      window.location.href = res.data.url;
    } catch (error) {
      //DO NOTHING
    }
  };
  const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve();
      };
      script.onerror = () => {
        reject(new Error("Failed to load Razorpay SDK"));
      };
      document.body.appendChild(script);
    });
  };


  const startRazorpay = async (data) => {
    await loadRazorpayScript();
    const dataToSend = {
      amount: amount,
      currency: "INR",
      receipt: receipt,
    };
  
    try {
      const postURL = API + "/order";
      const res = await axios.post(postURL, dataToSend);
  
      const order = res.data;
      
      localStorage.setItem("razorpay", order.id);
      localStorage.setItem("method", "razorpay");
      localStorage.setItem("plan", 'free');
  
      const options = {
        key: 'rzp_live_PwFLUg2b6qe1uU', 
        amount: amount, 
        currency: "INR",
        name: "PickMyCourse",
        description: "PickMyCourse Subscription",
        image: "https://hackwittechnologies.com/assets/imgs/pmclogo.png",
        order_id: order.id, // This is the order_id generated by Razorpay
        handler: async function (response) {
          const body = {
            ...response,
            uid: localStorage.getItem("user"),
            plan: localStorage.getItem("plan"),
          };
  
          try {
            const validateRes = await axios.post(
              `${API}/order/validate`,
              body,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const jsonRes = validateRes.data;
            localStorage.setItem("type", localStorage.getItem("plan"));
            console.log(jsonRes);
            navigate("/success");
          } catch (validateError) {
            console.error("Validation error:", validateError);
          }
        },
        prefill: {
          name: data.fname,
          email: data.email,
          contact: "0000000000", // You might want to replace this with the user's actual contact
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        toast.error("Payment failed");
      });
  
      rzp1.open();
    } catch (error) {
      console.error("Error starting Razorpay:", error);
      toast.error("Failed to initiate payment. Please try again.");
    }
  };

  return (
    <div className="bg-[#300080] h-screen flex justify-center items-center font-poppins text-white  ">
      <div className="w-[430px] mx-1 px-4 py-1 flex flex-col justify-center ">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <p className="text-center text-lg my-2 font-extralight">Payment</p>
          <p className="text-center text-sm my-1">
            Enter your details and select payment gateway to continue
          </p>
          <div className="flex flex-col gap-1 mx-4 my-1 font-extralight">
            <label htmlFor="email">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              {...register("email")}
              className="py-2  rounded-md text-center text-black shadow-md outline-none"
            />
            <p className="text-center text-red-300">{errors.email?.message}</p>
            <label htmlFor="fname">
              First Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g John"
              {...register("fname")}
              className="py-2  rounded-md px-4 text-center text-black shadow-md outline-none"
            />
            <p className="text-center text-red-300">{errors.fname?.message}</p>
            <label htmlFor="lname">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g Doe"
              {...register("lname")}
              className="py-2 px-4 rounded-md  text-center text-black shadow-md outline-none"
            />
            <p className="text-center text-red-300">{errors.lname?.message}</p>
            <label htmlFor="address">
              Address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Address"
              {...register("address")}
              className="py-2 px-2  rounded-md text-center  text-black shadow-md outline-none"
            />
            <p className="text-center text-red-300">
              {errors.address?.message}
            </p>
            <label htmlFor="phone">
              Country <span className="text-red-600">*</span>
            </label>
            <div className="relative inline-block  w-full">
              <select
                className="block w-full text-black px-3 py-2 pr-10 outline-none rounded-lg "
                {...register("country")}
              >
                <option value="" disabled>
                  Select Country
                </option>
                {options.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                <FaCaretDown className="text-black text-2xl" />
              </div>
            </div>
            <p className="text-center text-red-300">
              {errors.country?.message}
            </p>

            <div className="flex justify-center my-3">
              <button
                className="text-sm bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2.5"
                type="submit"
                onClick={() => setPaymentMethod("stripe")}
              >
                Stripe ( For International pay)
              </button>
            </div>
            <div className="flex justify-center mb-3">
              <button
                className="text-sm bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2.5"
                type="submit"
                onClick={() => setPaymentMethod("razorpay")}
              >
                Razorpay ( For Indian Pay)
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
