import React, { useEffect, useState } from "react";
import gallery from "../../assets/gallery.png";
import { useLocation } from "react-router-dom";
import { API, formatDate1 } from "../../Host";
import axios from "axios";

const Modal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className=" relative w-[550px]  h-[350px]">
        <p onClick={onClose} className=" text-red-500 font-extrabold text-2xl absolute right-2 ">x</p>
        <img src={imageUrl} alt="Modal" className="w-full h-full" />
      </div>
    </div>
  );
};

const ViewTicket = () => {
  const location = useLocation();
  const ticketId = location.state?.ticketId;
  const [ticket, setTicket] = useState({});
  const [attachments, setAttachments] = useState([]);
  const [userImages, setUserImages] = useState([]);
  const [adminImages, setAdminImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetchTicket();
    fetchAttachments();
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

  const fetchAttachments = async () => {
    try {
      const response = await axios.get(
        `${API}/api/getattachments?ticketId=${ticketId}`
      );
      const responseData = await response.data.attachments;
      setAttachments(responseData);
      await loadAttachmentFiles(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const loadAttachmentFiles = async (attachments) => {
    const userImagesTemp = [];
    const adminImagesTemp = [];
  
    for (const attachment of attachments) {
      try {
        const response = await axios.get(`${API}/api/file/${attachment.attachment}`, {
          responseType: 'blob'
        });
  
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const url = URL.createObjectURL(blob); 
        if (attachment.createdby === "user") {
          userImagesTemp.push(url);
        } else if (attachment.createdby === "admin") {
          adminImagesTemp.push(url);
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    setUserImages(userImagesTemp); 
    setAdminImages(adminImagesTemp);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
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
          Category : {ticket?.category}
        </p>
        <p className="text-normal font-normal mb-4">
          Priority : {ticket?.priority}
        </p>
        <span className="flex items-center gap-2 flex-wrap">
          <p className="text-normal font-normal">Attachments :</p>
          {userImages.map((img, index) => (
            <span key={index} onClick={() => openModal(img)}>
              <img src={img} alt="User  Attachment" className="w-10 h-10 cursor-pointer rounded-md" />
            </span>
          ))}
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
            {adminImages.map((img, index) => (
              <span key={index} onClick={() => openModal(img)}>
                <img src={img} alt="Admin Attachment" className="w-10 h-10 cursor-pointer rounded-md" />
              </span>
            ))}
          </span>
          <p className="text-normal font-normal my-2">Description :</p>
          <p className="text-normal mb-5">{ticket?.desc2}</p>
          <hr className="my-3 mb-12" />
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage} />
    </div>
  );
};

export default ViewTicket;