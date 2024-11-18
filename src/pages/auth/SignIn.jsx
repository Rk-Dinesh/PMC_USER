import React from "react";
import Logo from "../../assets/PMC_Logo.png";
import { useNavigate } from "react-router-dom";
import cover from "../../assets/bgimage.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignIn = () => {
  const navigate = useNavigate();

  const redirectSignUp = () => {
    navigate("/signup");
  };

  const redirectOtp = () => {
    navigate("/otp");
  };

  

  return (
    <div className="bg-[#300080] h-screen flex justify-center items-center font-poppins text-white  ">
      <div className="w-[430px] mx-1  bg-[#200098]   p-4  flex flex-col justify-center shadow-black shadow-lg relative">
        <img
          src={cover}
          alt="Image"
          className="absolute top-2 right-1 w-[420px] opacity-20"
        />
        <form className="z-0">
          <img src={Logo} alt="Logo" className="w-full " />
          <p className="text-center text-lg my-2">Login</p>
          <div className="flex flex-col gap-3 mx-2 my-4 ">
           <span className="">
           <PhoneInput
              country={"in"}
              // value={this.state.phone}
              // onChange={phone => this.setState({ phone })}
              className="text-black mx-8 "
              // containerStyle={{ border: '1px solid #ccc', borderRadius: '5px' }}
          inputStyle={{ padding: '10px',color:'black',marginLeft:'38px' }}
          buttonStyle={{
            background: 'linear-gradient(to right, #3D03FA, #A71CD2)', // Gradient background
            border: 'none', // No border
            paddingRight:'10px',
            
          }}
          dropdownStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
          // searchStyle={{ padding: '5px', fontSize: '14px' }}
              
            />
           </span>
            <div className="flex justify-center my-8">
              <button
                className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2.5 "
                onClick={redirectOtp}
              >
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
