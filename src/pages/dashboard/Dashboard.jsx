import React, { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import './style.css';

const Dashboard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState()

  const handleRadioChange = (event) => {
    console.log("Selected Value:", event.target.value);
    setSelectedValue(event.target.value);
  };

  return (
   <div className=" mx-12 my-12">
    <div className="w-1/2 bg-white px-3 py-1.5">
    <PhoneInput
      placeholder="Enter phone "
      value={value}
      onChange={setValue}/>
    </div>
   </div>
  );
};

export default Dashboard;