import React from "react";
import Logo from "../../assets/PMC_Logo.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {
  return (
    <div className="bg-[#300080] h-screen flex justify-center items-center font-poppins">
      <div className="w-2/6 bg-[#200098] p-4">
        <img src={Logo} alt="Logo" className="w-full" />
        <p className="block text-center text-white">Login</p>
        <PhoneInput
          country={"in"}
          // value={this.state.phone}
          // onChange={(phone) => this.setState({ phone })}
        />
      </div>
    </div>
  );
};

export default SignUp;
