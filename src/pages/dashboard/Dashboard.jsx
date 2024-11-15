import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./style.css";
import assest from '../../assets/assest.png'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const course = [
    {
      images: assest,
      topic: "Topic Name",
      type: "Text & Video Course",
      date: "12/12/24",
      certificate: "no",
    },
    {
      images: assest,
      topic: "Topic Name",
      type: "Text & Theory Course",
      date: "12/11/24",
      certificate: "no",
    },
    {
      images: assest,
      topic: "Topic Name",
      type: "Text & Video Course",
      date: "12/08/24",
      certificate: "no",
    },
    {
      images: assest,
      topic: "Topic Name",
      type: "Text & Theory Course",
      date: "12/11/24",
      certificate: "no",
    },
    {
      images: assest,
      topic: "Topic Name",
      type: "Text & Video Course",
      date: "12/08/24",
      certificate: "no",
    },
  ];

  const redirectcourse = ()=> {
    navigate('/course')
  }

  return (
    <div className=" mx-5 my-6 font-poppins font-extralight">
      <div className="w-full bg-black">
        <p className="mx-3 my-5 py-2">
          Notification Area : We have sent you an verification on your email.
          Please verify your email to generate by you is incorrect than you can
          update it from the profile section.
        </p>
      </div>
      <div className="flex gap-4 flex-wrap ">
        <div className="lg:w-52 md:w-48 w-36 h-56 bg-black my-1">
          <p className="mx-3 text-normal text-center mt-6">
            Total Courses Generated{" "}
          </p>
          <p className="text-center lg:text-7xl md:text-7xl text-6xl my-4">38</p>
          <button className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2.5 " onClick={redirectcourse}>
            View
          </button>
        </div>
        <div className="lg:w-52 md:w-48 w-36 h-56 bg-black  my-1">
          <p className="mx-3 text-normal text-center mt-6">
          Video Courses Generated{" "}
          </p>
          <p className="text-center lg:text-7xl md:text-7xl text-6xl my-4">28</p>
          <button className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2.5 " onClick={redirectcourse}>
            View
          </button>
        </div>
        <div className="lg:w-52 md:w-48 w-36 h-56 bg-black  my-1">
          <p className="mx-3 text-normal text-center mt-6">
          Theory Courses Generated{" "}
          </p>
          <p className="text-center lg:text-7xl md:text-7xl text-6xl my-4">18</p>
          <button className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2.5 " onClick={redirectcourse}>
            View
          </button>
        </div>
        <div className="lg:w-52 md:w-48 w-36 h-56 bg-black  my-1">
          <p className="mx-3 text-normal text-center mt-8 ">
          Active Courses {" "}
          </p>
          <p className="text-center lg:text-7xl md:text-7xl text-6xl my-6">36</p>
          <button className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2.5 " onClick={redirectcourse}>
            View
          </button>
        </div>
        <div className="lg:w-52 md:w-48 w-36 h-56 bg-black  my-1">
          <p className="mx-3 text-normal text-center mt-8 ">
          Completed Courses{" "}
          </p>
          <p className="text-center lg:text-7xl md:text-7xl text-6xl my-6">37</p>
          <button className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2.5  " onClick={redirectcourse}>
            View
          </button>
        </div>
      </div>
      <p className="text-lg my-4">Recent Courses</p>
      <div className="flex gap-4 flex-wrap">
        {course.map((data,index)=>(
        <div className="lg:w-52 md:w-52 w-48 h-60 bg-black my-1" key={index}>
            <img src={data.images} alt="Image" className="w-full"/>
            <p className="text-lg mx-2 my-0.5">{data.topic}</p>
            <p className="text-sm mx-2 my-0.5">{data.type}</p>
            <p className="text-sm mx-2 mb-3">{data.type}</p>
            <button className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-1.5 " onClick={redirectcourse}>
            Continue
          </button>
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default Dashboard;
