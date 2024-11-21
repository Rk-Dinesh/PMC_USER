import React, { useEffect, useState } from "react";
import gallery from "../../assets/gallery.png";
import { useLocation } from "react-router-dom";
import { API, formatDate1 } from "../../Host";
import axios from "axios";

const ViewTicket = () => {
  const location = useLocation();
  const ticketId = location.state?.ticketId;
  const [ticket, setTicket] = useState({});

  useEffect(() => {
    fetchTicket();
  }, []);

  const fetchTicket = async () => {
    try {
      const response = await axios.get(
        `${API}/api/getticketbyid?ticketId=${ticketId}`
      );
      const responseData = await response.data.ticket;
      setTicket(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-poppins my-5 mx-3 font-extralight">
      <hr className="my-3" />
      <div className="mx-5">
        <p className="text-lg mt-3 mb-2 ">{ticket?.fname}</p>
        <p className="text-normal mb-4">Ticket No: {ticket?.ticketId}</p>
        <p className="text-normal font-normal">
          Date : {formatDate1(ticket?.createdAt)}
        </p>
        <p className="text-normal font-normal">
          {" "}
          Category : {ticket?.category}
        </p>
        <p className="text-normal font-normal mb-4">
          Priority :{ticket?.priority}
        </p>
        <span className="flex items-center gap-2 flex-wrap">
          <p className="text-normal font-normal">Attachments :</p>
          <span>
            <img src={gallery} alt="Image" className="w-10 h-10" />
          </span>
          <span>
            <img src={gallery} alt="Image" className="w-10 h-10" />
          </span>
          <span>
            <img src={gallery} alt="Image" className="w-10 h-10" />
          </span>
        </span>
        <p className="text-normal font-normal my-2">Description :</p>
        <p className="text-normal mb-3">{ticket?.desc1}</p>
      </div>
      <hr className="my-3" />
      {ticket?.desc2 !== null && (
        <div className="mx-5">
          <p className="text-lg mt-3 mb-2 ">Support</p>
          <p className="text-normal font-normal my-4">
            Date : {ticket?.updatedAt}
          </p>
          <span className="flex items-center gap-2 my-3 flex-wrap">
            <p className="text-normal font-normal ">Attachments :</p>
            <span>
              <img src={gallery} alt="Image" className="w-10 h-10" />
            </span>
          </span>
          <p className="text-normal font-normal my-2">Description :</p>
          <p className="text-normal mb-5">{ticket?.desc2}</p>
          <hr className="my-3 mb-12" />
        </div>
      )}
    </div>
  );
};

export default ViewTicket;
