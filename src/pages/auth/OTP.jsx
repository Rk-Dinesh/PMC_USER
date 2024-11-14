import React, { useState } from "react";
import Logo from "../../assets/PMC_Logo.png";
import { useNavigate } from "react-router-dom";
import cover from "../../assets/bgimage.png";

const OTP = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });

  const handleChange = (value, event) => {
    setFormData({ ...formData, [value]: event.target.value });
  };

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  const redirectHome = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-[#300080] h-screen flex justify-center items-center font-poppins text-white ">
      <div className="w-[430px] mx-1  bg-[#200098]  p-4  flex flex-col justify-center shadow-black shadow-lg relative">
      <img
          src={cover}
          alt="Image"
          className="absolute top-2 right-1 w-[420px] opacity-20"
        />
        <form className="z-0">
          <img src={Logo} alt="Logo" className="w-full" />
          <p className="text-center text-lg my-4 font-extralight">
            Phone Number Verification
          </p>
          <div className="flex justify-center gap-3 my-6">
            <input
              name="otp1"
              type="text"
              autoComplete="off"
              className="w-12 h-14 text-center border-2 bg-transparent outline-none"
              value={formData.otp1}
              onChange={(e) => handleChange("otp1", e)}
              tabIndex="1"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp2"
              type="text"
              autoComplete="off"
              className="w-12 h-14 text-center border-2 bg-transparent outline-none"
              value={formData.otp2}
              onChange={(e) => handleChange("otp2", e)}
              tabIndex="2"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp3"
              type="text"
              autoComplete="off"
              className="w-12 h-14 text-center border-2 bg-transparent outline-none"
              value={formData.otp3}
              onChange={(e) => handleChange("otp3", e)}
              tabIndex="3"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp4"
              type="text"
              autoComplete="off"
              className="w-12 h-14 text-center border-2 bg-transparent outline-none"
              value={formData.otp4}
              onChange={(e) => handleChange("otp4", e)}
              tabIndex="4"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp5"
              type="text"
              autoComplete="off"
              className="w-12 h-14 text-center border-2 bg-transparent outline-none"
              value={formData.otp5}
              onChange={(e) => handleChange("otp5", e)}
              tabIndex="5"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp6"
              type="text"
              autoComplete="off"
              className="w-12 h-14 text-center border-2 bg-transparent outline-none"
              value={formData.otp6}
              onChange={(e) => handleChange("otp6", e)}
              tabIndex="6"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
          </div>
          <p className="text-center font-extralight mx-2 my-3">
            {" "}
            We have sent you an OTP (one time password) to your phone number
          </p>
          <div className="flex justify-around my-12">
            <p className="text-lg font-extralight">Resend OTP</p>
            <p className="text-lg font-extralight">90 secs</p>
          </div>
          <div className="flex justify-center my-12">
            <button
              className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2.5 "
              onClick={redirectHome}
            >
              Verify
            </button>
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

export default OTP;
