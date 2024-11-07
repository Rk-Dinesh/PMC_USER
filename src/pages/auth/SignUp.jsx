import React from "react";
import Logo from "../../assets/PMC_Logo.png";
import { useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {
  const navigate = useNavigate();

  const redirectSignIn = () =>{
      navigate('/')
  }
  return (
    <div className="bg-[#300080] h-screen flex justify-center items-center font-poppins text-white bg-[url('../../assets/bgimage.png')] ">
      <div className="w-[430px] mx-1  bg-[#200098] bg-[url('../../assets/bgimage.png')] bg-cover bg-center px-4 py-1 flex flex-col justify-center shadow-lg">
        <img src={Logo} alt="Logo" className="w-full" />
        <form>
          <p className="text-center text-lg my-2">Create an account</p>
          <div className="flex flex-col gap-2 mx-4 my-2 font-extralight">
            <label htmlFor="fname">
              First Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g John"
              required
              className="py-2  rounded-md px-4 text-black shadow-md"
            />
            <label htmlFor="lname">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g Doe"
              required
              className="py-2 px-4 rounded-md  text-black shadow-md"
            />
            <label htmlFor="phone">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="9999999999"
              required
              className="py-2 px-2  rounded-md text-center  text-black shadow-md"
            />
            <label htmlFor="email">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              required
              className="py-2  rounded-md text-center text-black shadow-md"
            />
            <label htmlFor="dob">
              Date of Birth <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="dd/mm/yy"
              required
              className="py-2  rounded-md text-center text-black shadow-md"
            />
            <div className="flex gap-2 items-center my-4">
              <input type="checkbox" name="" id="" />
              <p className="text-sm font-extralight">
                I agree to the{" "}
                <span className="text-blue-400">Terms of Service</span> &{" "}
                <span className="text-blue-400">Privacy Policy</span>
              </p>
            </div>
            <div className="flex justify-center my-1">
              <button className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2.5 " onClick={redirectSignIn}>
                Continue
              </button>
            </div>
          </div>

          <p className="text-sm mt-3 text-center font-extralight">
            &#169; PickMyCourse Developed with{" "}
            <span className="text-red-700">&#x2764;</span> by SeenIT Pty Ltd
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
