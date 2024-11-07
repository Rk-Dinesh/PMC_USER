import React from 'react'
import Logo from "../../assets/PMC_Logo.png";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const navigate = useNavigate();

    const redirectSignUp = () =>{
        navigate('/signup')
    }
  return (
    <div className="bg-[#300080] h-screen flex justify-center items-center font-poppins text-white bg-[url('../../assets/bgimage.png')] ">
    <div className="w-[430px] mx-1  bg-[#200098] bg-[url('../../assets/bgimage.png')] bg-cover bg-center p-4  flex flex-col justify-center ">
      <img src={Logo} alt="Logo" className="w-full" />
      <form>
        <p className="text-center text-lg my-2">Login</p>
        <div className="flex flex-col gap-3 mx-2 my-4 ">
          <label htmlFor="phone">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Phone"
            required
            className="py-1.5  rounded-md text-center text-black"
          />
          <div className="flex justify-center my-8">
            <button className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2.5 ">
              Continue
            </button>
          </div>
        </div>
        <p className="text-center text-lg py-2" onClick={redirectSignUp}>Don't have an account?</p>
        <p className="text-center text-lg pb-16" onClick={redirectSignUp}>Create an account</p>
        <p className="text-sm mt-10 text-center font-extralight">&#169; PickMyCourse Developed with <span className="text-red-700">&#x2764;</span> by SeenIT Pty Ltd</p>
      </form>
    </div>
  </div>
  )
}

export default SignIn