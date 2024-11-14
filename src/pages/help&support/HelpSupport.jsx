import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HelpSupport = () => {
  const navigate = useNavigate();
  const redirectnewticket = () => {
    navigate("/newticket");
  };
  const redirectviewticket = () => {
    navigate("/viewticket");
  };
  const ticket = [
    {
      ticket: "12345",
      category: "General",
      Date: "12/12/24",
      status: "New Ticket",
    },
    {
      ticket: "12345",
      category: "General",
      Date: "12/12/24",
      status: "In Progress",
    },
    {
      ticket: "12345",
      category: "General",
      Date: "12/12/24",
      status: "Closed",
    },
    {
      ticket: "12345",
      category: "General",
      Date: "12/12/24",
      status: "On Hold",
    },
    {
      ticket: "12345",
      category: "General",
      Date: "12/12/24",
      status: "New Ticket",
    },
  ];
  return (
    <div className="mx-4 my-6 font-poppins">
      <button
        className={` text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-52 py-2.5 my-5 `}
        onClick={redirectnewticket}
      >
        Raise Ticket
      </button>
      <div className="flex justify-between items-center flex-wrap gap-3">
        <p className="text-lg font-extralight">Your Support Tickets</p>
        <div className="flex items-center gap-3 bg-white w-96 px-6 py-1.5  rounded-md mr-3">
          <FaSearch className="text-black text-xl" />
          <input
            type="text"
            placeholder="Search By Date/Ticket #"
            className="bg-transparent w-full outline-none text-center font-extralight text-black"
          />
        </div>
      </div>
      <hr className="my-2 " />
      {ticket.map((ticket, index) => (
        <>
          <div className="flex justify-between mx-2 flex-wrap" key={index}>
            <div className="flex flex-col gap-1">
              <p>Ticket No: {ticket.ticket}</p>
              <p>Category : {ticket.category}</p>
              <p>Date : {ticket.Date}</p>
              <p>
                Status :{" "}
                <span
                  className={` px-3 rounded-md ${
                    ticket.status === "New Ticket"
                      ? "bg-green-700"
                      : ticket.status === "In Progress"
                      ? "bg-yellow-500"
                      : ticket.status === "On Hold"
                      ? "bg-red-400"
                      : "bg-blue-400"
                  }`}
                >
                  {ticket.status}
                </span>
              </p>
            </div>
            <div>
              <button
                className={` text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-48 py-2 my-5 `}
                onClick={redirectviewticket}
              >
                View Ticket
              </button>
            </div>
          </div>
          <hr className="my-3 " />
        </>
      ))}
    </div>
  );
};

export default HelpSupport;
