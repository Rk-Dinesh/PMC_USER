import React from "react";
import { useNavigate } from "react-router-dom";

const ListTopics = () => {
    const navigate = useNavigate();

    const redirectform = () => {
        navigate('/create')
    }

    const redirectcourse = () => {
        navigate('/content')
    }
  return (
    <div className=" text-lg font-poppins font-extralight mx-12 my-5">
      <p className="text-xl my-3 mt-6">Topic Name</p>
      <p className="text-normal my-3">
        List of Topics & subtopics this course will cover
      </p>
      <p className="text-lg mt-6">Subtopic Name</p>
      <p className="text-sm ">Lesson Name</p>
      <p className="text-sm">Lesson Name</p>
      <p className="text-sm ">Lesson Name</p>
      <p className="text-sm ">Lesson Name</p>
      <p className="text-sm ">Lesson Name</p>
      <p className="text-lg mt-3">Subtopic Name</p>
      <p className="text-sm ">Lesson Name</p>
      <p className="text-sm">Lesson Name</p>
      <p className="text-sm ">Lesson Name</p>
      <p className="text-sm ">Lesson Name</p>
      <p className="text-sm ">Lesson Name</p>
      <p className="text-lg mt-3">Subtopic Name</p>
      <p className="text-sm ">Lesson Name</p>
      <p className="text-sm">Lesson Name</p>
      <p className="text-sm ">Lesson Name</p>
      <p className="text-sm ">Lesson Name</p>
      <p className="text-sm ">Lesson Name</p>
     <div className=" flex flex-col gap-3 mt-5">
     <button
        className={` text-base bg-white text-black w-48 py-2  font-normal `}
       onClick={redirectform}
      >
       Go Back
      </button>
      <button
        className={` text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-48 py-2  font-normal `}
      onClick={redirectcourse}
      >
        Generate Course
      </button>
     </div>
    </div>
  );
};

export default ListTopics;
