import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Subscription = () => {
  const navigate = useNavigate();
  const plans = [
    {
      plan: "Gold",
      startDate: "12/12/24",
      endDate: "12/12/24",
      courses: "20/20",
    },
    {
      plan: "Silver",
      startDate: "12/12/24",
      endDate: "12/12/24",
      courses: "20/20",
    },
    {
      plan: "Gold",
      startDate: "12/12/24",
      endDate: "12/12/24",
      courses: "20/20",
    },
  ];

  const redirectinvoice = () => {
    navigate('/invoice')
  };

  const redirectPricing = () => {
    navigate('/pricing')
  }
  return (
    <div className="mx-5 my-6 font-poppins font-extralight">
      <div className="max-w-sm h-auto bg-black   pt-2 my-5">
        <p className="text-2xl mx-5 ">Active Subscription</p>
        <p className="text-normal mx-5 ">Subscription : Gold</p>
        <p className="text-normal mx-5 ">Subscription Expiry : 22/12/2024</p>
        <p className="text-normal mx-5 mb-2">No Of Courses : 06/20</p>
        <button
          className={` text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2   `}
          onClick={redirectPricing}
        >
          Change / Upgrade Plan
        </button>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-3 my-2 mx-3">
        <p className="text-lg font-normal">Subscription History</p>
        <div className="flex items-center gap-3 bg-white w-96 px-6 py-1.5  rounded-md mr-3">
          <FaSearch className="text-black text-xl" />
          <input
            type="text"
            placeholder="Search By Date/ Plan Name"
            className="bg-transparent w-full outline-none text-center font-extralight text-black"
          />
        </div>
      </div>
      <hr className="my-2 " />
      {plans.map((plan, index) => (
        <>
          <div className="flex justify-between mx-2 flex-wrap" key={index}>
            <div className="flex flex-col gap-0.5">
              <p className="text-xl">Subscription : {plan.plan}</p>
              <p>Subscription Start Date : {plan.startDate}</p>
              <p>Subscription End Date : {plan.endDate}</p>
              <p>No Of Courses Generated : {plan.courses}</p>
            </div>
            <div>
              <button
                className={` text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-48 py-2 my-5 font-normal `}
                onClick={redirectinvoice}
              >
                View Invoice
              </button>
            </div>
          </div>
          <hr className="my-3 " />
        </>
      ))}
    </div>
  );
};

export default Subscription;
