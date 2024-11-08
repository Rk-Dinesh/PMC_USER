import React, { useState } from "react";

const Dashboard = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    console.log("Selected Value:", event.target.value);
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="value"
          id="4"
          value="4"
          onChange={handleRadioChange}
          checked={selectedValue === "4"}
          className="hidden peer"
        />
        <label
          htmlFor="4"
          className="flex items-center cursor-pointer"
        >
          <span className="w-5 h-5 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
          <span className={`w-4 h-4  ${selectedValue === "4" ? "bg-white" : "hidden"}`}></span>
          </span>
          <span className="ml-2">5</span>
        </label>
      </div>

      <div className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="value"
          id="7"
          value="7"
          onChange={handleRadioChange}
          checked={selectedValue === "7"}
          className="hidden peer"
        />
        <label
          htmlFor="7"
          className="flex items-center cursor-pointer"
        >
          <span className="w-5 h-5 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
          <span className={`w-4 h-4  ${selectedValue === "7" ? "bg-white" : "hidden"}`}></span>
          </span>
          <span className="ml-2">10</span>
        </label>
      </div>
    </div>
  );
};

export default Dashboard;