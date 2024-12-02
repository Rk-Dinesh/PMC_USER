import React from "react";
import Logo from "../../assets/PMC_Logo.png";
import { useNavigate } from "react-router-dom";
import cover from "../../assets/bgimage.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { API } from "../../Host";
import { toast } from "react-toastify";

const UserSchema = yup.object().shape({
  phone: yup.number().required("Phone Number is required"),
});

const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserSchema),
  });

  const redirectSignUp = () => {
    navigate("/signup");
  };

  const onSubmit = async (data) => {
    const formData = {
      ...data,
    };
    try {
      const response = await axios.post(`${API}/api/usersignin`, formData);
      const responseData = response.data.userId;
      if (response.status === 200) {
        toast.success("Logged in Successfully");
        localStorage.setItem("user", responseData._id);
        localStorage.setItem("fname", responseData.fname);
        localStorage.setItem("lname", responseData.lname);
        localStorage.setItem("email", responseData.email);
        localStorage.setItem("phone", responseData.phone);
        localStorage.setItem("type", responseData.type);
        navigate("/otp");
      } else {
        toast.error("Failed To Upload");
        console.log("Error in posting Data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#300080] h-screen flex justify-center items-center font-poppins text-white  ">
      <div className="w-[430px] mx-1  bg-[#200098]   p-4  flex flex-col justify-center shadow-black shadow-lg relative">
        <img
          src={cover}
          alt="Image"
          className="absolute top-2 right-1 w-[420px] opacity-20"
        />
        <form className="z-0" onSubmit={handleSubmit(onSubmit)}>
          <img src={Logo} alt="Logo" className="w-full " />
          <p className="text-center text-lg my-2">Login</p>
          <div className="flex flex-col gap-3 mx-2 my-4 ">
            <label htmlFor="phone">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Phone"
              {...register("phone")}
              className="py-2  rounded-md text-center text-black shadow-md outline-none"
            />
            <div className="flex justify-center my-8">
              <button className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2.5 ">
                Continue
              </button>
            </div>
          </div>

          <p className="text-center text-lg py-2" onClick={redirectSignUp}>
            Don't have an account?
          </p>
          <p className="text-center text-lg pb-16" onClick={redirectSignUp}>
            Create an account
          </p>
          <p className="text-sm mt-10 text-center font-extralight">
            &#169; PickMyCourse Developed with{" "}
            <span className="text-red-700">&#x2764;</span> by SeenIT Pty Ltd
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;