import React from "react";
import { FaCaretDown } from "react-icons/fa";

const NewTicket = () => {
  return (
    <div className="font-poppins font-extralight my-5 lg:mx-6 md:mx-6 mx-2">
      <p className="text-center ">Raise Ticket</p>
      <div className="grid grid-cols-12 gap-1 mt-12 mx-3">
        <div className="lg:col-span-6 md:col-span-6 col-span-12 ">
          <div className="flex flex-col">
            <label htmlFor="" className="my-1 font-normal">
              Select Category <span className="text-red-700">*</span>
            </label>
            <div class="relative inline-block lg:w-3/4 md:w-3/4 w-full">
              <select class="block w-full text-black px-3 py-2 pr-10 outline-none rounded-lg ">
              <option value="" disabled >Select Category</option>
                <option value="">Hi</option>
                <option value="">Hello</option>
                <option value="">Hey</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                <FaCaretDown className="text-black text-2xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-col py-8 gap-1 ">
            <label htmlFor="subject" className="font-normal">
              Subject <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Subject"
              required
              className="py-2 px-4  rounded-md  text-black shadow-md outline-none lg:w-3/4 md:w-3/4 w-full"
            />
          </div>
         <div className="flex flex-col gap-1">
         <label htmlFor="desc" className="font-normal">
              Description <span className="text-red-700">*</span>
            </label>
          <textarea name="" id="" rows={8} className="lg:w-3/4 md:w-3/4 w-full text-black p-3 rounded-3xl outline-none" placeholder="Describe your issue"></textarea>
         </div>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <div className="flex flex-col">
            <label htmlFor="" className="my-1 font-normal">
              Select Priority <span className="text-red-700">*</span>
            </label>
            <div class="relative inline-block lg:w-3/4 md:w-3/4 w-full">
              <select class="block w-full text-black px-3 py-2 pr-10 outline-none rounded-lg ">
              <option value="" disabled >Select Priority</option>
                <option value="">Hi</option>
                <option value="">Hello</option>
                <option value="">Hey</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                <FaCaretDown className="text-black text-2xl" />
              </div>
            </div>
          </div>
         <div className="block text-center  lg:mr-36 md:mr-36 mx-auto">
         <button
              className={` text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]   px-6 py-2.5 my-5 `}
            >
             Raise a Ticket
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewTicket;
