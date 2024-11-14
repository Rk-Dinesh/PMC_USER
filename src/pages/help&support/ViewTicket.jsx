import React from "react";
import gallery from '../../assets/gallery.png'

const ViewTicket = () => {
  return (
    <div className="font-poppins my-5 mx-3 font-extralight">
      <hr className="my-3"/>
      <div className="mx-5">
        <p className="text-lg mt-3 mb-2 ">John Doe</p>
        <p className="text-normal mb-4">Ticket No: 17896546</p>
        <p className="text-normal font-normal">Date : 15-Oct-2024</p>
        <p className="text-normal font-normal"> Category : General</p>
        <p className="text-normal font-normal mb-4">Priority : Medium</p>
       <span className="flex items-center gap-2 flex-wrap">
       <p className="text-normal font-normal">
          Attachments :
        </p>
        <span><img src={gallery} alt="Image"  className="w-10 h-10"/></span>
        <span><img src={gallery} alt="Image"  className="w-10 h-10"/></span>
        <span><img src={gallery} alt="Image"  className="w-10 h-10"/></span>
       </span>
        <p className="text-normal font-normal my-2">Description :</p>
        <p className="text-normal mb-3">
          Lorem ipsum is a dummy text used for type setting instead of real text
          only for demonstration purpose. Lorem ipsum is a dummy text used for
          type setting instead of real text only for demonstration purpose
        </p>
      </div>
      <hr className="my-3"/>
      <div className="mx-5">
        <p className="text-lg mt-3 mb-2 ">Support</p>
        <p className="text-normal font-normal my-4">Date : 15-Oct-2024</p>
        <span className="flex items-center gap-2 my-3 flex-wrap">
       <p className="text-normal font-normal ">
          Attachments :
        </p>
        <span><img src={gallery} alt="Image"  className="w-10 h-10"/></span>
        
       </span>
       <p className="text-normal font-normal my-2">Description :</p>
        <p className="text-normal mb-5">
          Lorem ipsum is a dummy text used for type setting instead of real text
          only for demonstration purpose. Lorem ipsum is a dummy text used for
          type setting instead of real text only for demonstration purpose
        </p>
      </div>
      <hr className="my-3 mb-12"/>
    </div>
  );
};

export default ViewTicket;
