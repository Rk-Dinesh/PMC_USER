import React from "react";
import { FaCaretDown } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { API } from "../../Host";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ticketSchema = yup.object().shape({
  category: yup
    .string()
    .test(
      "not-select",
      "Please select an Category",
      (value) => value !== "" && value !== "Select  Category"
    ),
  subject: yup.string().required("subject is required"),
  desc1: yup.string().required("Description is required"),
  priority: yup
    .string()
    .test(
      "not-select",
      "Please select an Priority",
      (value) => value !== "" && value !== "Select  Priority"
    ),
});

const NewTicket = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ticketSchema),
  });

  const OnSubmit = async (data) => {
    const formData = {
      ...data,
      user: localStorage.getItem("user"),
      fname: localStorage.getItem("fname"),
      lname: localStorage.getItem("lname"),
      email: localStorage.getItem("email"),
      phone: localStorage.getItem("phone"),
    };

    try {
      const response = await axios.post(`${API}/api/ticket`, formData);
      if (response.status === 200) {
        toast.success("Ticket Raised");
        navigate('/support')
      } else {
        toast.error("failed to raise ticket");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-poppins font-extralight my-5 lg:mx-6 md:mx-6 mx-2">
      <p className="text-center ">Raise Ticket</p>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <div className="grid grid-cols-12 gap-1 mt-8 mx-3">
          <div className="lg:col-span-6 md:col-span-6 col-span-12 ">
            <div className="flex flex-col">
              <label htmlFor="" className="my-1 font-normal">
                Select Category <span className="text-red-700">*</span>
              </label>
              <div className="relative inline-block lg:w-3/4 md:w-3/4 w-full">
                <select
                  className="block w-full text-black px-3 py-2 pr-10 outline-none rounded-lg "
                  {...register("category")}
                >
                  <option value="">Select Category</option>
                  <option value="Hi">Hi</option>
                  <option value="Hello">Hello</option>
                  <option value="Hey">Hey</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                  <FaCaretDown className="text-black text-2xl" />
                </div>
              </div>
            </div>
            <p className="text-red-300 mt-3">{errors.category?.message}</p>
            <div className="flex flex-col py-8 gap-1 ">
              <label htmlFor="subject" className="font-normal">
                Subject <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Subject"
                {...register("subject")}
                className="py-2 px-4  rounded-md  text-black shadow-md outline-none lg:w-3/4 md:w-3/4 w-full"
              />
              <p className="text-red-300 mt-3">{errors.subject?.message}</p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="desc" className="font-normal">
                Description <span className="text-red-700">*</span>
              </label>
              <textarea
                name=""
                id=""
                rows={8}
                className="lg:w-3/4 md:w-3/4 w-full text-black p-3 rounded-3xl outline-none"
                placeholder="Describe your issue"
                {...register("desc1")}
              ></textarea>
              <p className="text-red-300 mt-3">{errors.desc1?.message}</p>
            </div>
            <div className="my-5 font-normal flex flex-col">
              <label htmlFor="file-input">
                {" "}
                Attachments (you can select multiple files)
              </label>
              <div className="relative my-1 lg:w-3/4 md:w-3/4 w-full">
                <label className="block bg-white rounded-lg">
                  <span className="sr-only">Choose File</span>
                  <input type="file" className="hidden" id="file-input" />
                  <button
                    className="bg-gray-300 text-black px-4 py-2.5 rounded-md"
                    for="file-input"
                  >
                    Choose Files
                  </button>
                </label>
                <span
                  className="absolute top-1/2 -translate-y-1/2 lg:right-4 md:right-4 right-16 text-normal text-black"
                  id="file-name"
                >
                  No Files Chosen
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 md:col-span-6 col-span-12">
            <div className="flex flex-col">
              <label htmlFor="" className="my-1 font-normal">
                Select Priority <span className="text-red-700">*</span>
              </label>
              <div className="relative inline-block lg:w-3/4 md:w-3/4 w-full">
                <select
                  className="block w-full text-black px-3 py-2 pr-10 outline-none rounded-lg "
                  {...register("priority")}
                >
                  <option value="">Select Priority</option>
                  <option value="HI">Hi</option>
                  <option value="hello">Hello</option>
                  <option value="yy">Hey</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                  <FaCaretDown className="text-black text-2xl" />
                </div>
              </div>
              <p className="text-red-300 mt-3">{errors.priority?.message}</p>
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
      </form>
    </div>
  );
};

export default NewTicket;
