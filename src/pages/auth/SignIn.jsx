import React, { useState, useEffect } from "react";
import Logo from "../../assets/PMC_Logo.png";
import { useNavigate } from "react-router-dom";
import cover from "../../assets/bgimage.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase.config"; 
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');



  const redirectSignUp = () => {
    navigate("/signup");
  };

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("reCAPTCHA verified");
        },
      }
    );
  };

  const handleSendOtp = (e) => {
    e.preventDefault(); 
    setUpRecaptcha();
    const appVerifier = window.recaptchaVerifier;
  
    // Log the phone number for debugging
    console.log("Phone number:", phone);
    console.log("Phone number:", phone, "Type:", typeof phone);
    const Phonenumber = "+" + phone
    console.log(Phonenumber);
    
  
    signInWithPhoneNumber(auth, Phonenumber, appVerifier)
      .then((confirmationResult) => {
        console.log("OTP sent", confirmationResult);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.error("Error during signInWithPhoneNumber", error);
        if (error.code === 'auth/invalid-phone-number') {
          toast.error("Invalid phone number format. Please enter a valid number.");
        } else {
          toast.error("Failed to send OTP. Please try again.");
        }
      });
  };

  return (
    <div className="bg-[#300080] h-screen flex justify-center items-center font-poppins text-white">
      <div className="w-[430px] mx-1 bg-[#200098] p-4 flex flex-col justify-center shadow-black shadow-lg relative">
        <img src={cover} alt="Image" className="absolute top-2 right-1 w-[420px] opacity-20" />
        <form className="z-0" onSubmit={handleSendOtp}>
          <img src={Logo} alt="Logo" className="w-full" />
          <p className="text-center text-lg my-2">Login</p>
          <div className="flex flex-col gap-3 mx-2 my-4 ">
            <label htmlFor="phone" className="mx-10">
              Phone <span className="text-red-600">*</span>
            </label>
           <div className="w-full mx-10">
           <PhoneInput country={"in"} value={phone} onChange={setPhone} className="text-black "/>
           </div>
            <div className="flex justify-center my-8">
              <button type="submit" className="text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2.5">
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
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default SignIn;