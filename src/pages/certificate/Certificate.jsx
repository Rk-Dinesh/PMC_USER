import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Certificate = () => {
  const navigate = useNavigate();
  const certificate = [
    {
      topic: "React",
      startDate: "12/12/24",
      endDate: "12/12/24",
    },
    {
      topic: "Angular",
      startDate: "12/12/24",
      endDate: "12/12/24",
    },
    {
      topic: "Vue",
      startDate: "12/12/24",
      endDate: "12/12/24",
    },
    {
      topic: "Next.js",
      startDate: "12/12/24",
      endDate: "12/12/24",
    },
  ];

  const redirectviewcertificate = () => {
    navigate("/viewcertificate");
  };
  return (
    <div className="mx-4 my-6 font-poppins">
      <div className="flex justify-between items-center flex-wrap gap-3">
        <p className="text-lg font-extralight">My Certificates</p>
        <div className="flex items-center gap-3 bg-white w-96 px-6 py-1.5  rounded-md mr-3">
          <FaSearch className="text-black text-xl" />
          <input
            type="text"
            placeholder="Search By Date"
            className="bg-transparent w-full outline-none text-center font-extralight text-black"
          />
        </div>
      </div>
      <hr className="my-2 " />
      {certificate.map((certify, index) => (
        <>
          <div
            className="flex justify-between mx-2 flex-wrap font-extralight"
            key={index}
          >
            <div className="flex flex-col gap-1">
              <p className="text-lg">Topic Name : {certify.topic}</p>
              <p>Start Date : {certify.startDate}</p>
              <p>End Date : {certify.endDate}</p>
            </div>
            <div>
              <button
                className={` text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-48 py-2 my-5 `}
                onClick={redirectviewcertificate}
              >
                View Certificate
              </button>
            </div>
          </div>
          <hr className="my-3 " />
        </>
      ))}
    </div>
  );
};

export default Certificate;
