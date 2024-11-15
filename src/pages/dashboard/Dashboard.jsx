import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./style.css";
import assest from "../../assets/assest.png";
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

  const redirectcourse = () => {
    navigate("/course");
  };

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
        <div className="lg:w-52 md:w-48 w-48 h-56 bg-black my-1">
          <p className="mx-3 text-normal text-center mt-6">
            Total Courses Generated{" "}
          </p>
          <p className="text-center lg:text-7xl md:text-7xl text-7xl my-4">
            38
          </p>
          <button
            className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2.5 "
            onClick={redirectcourse}
          >
            View
          </button>
        </div>
        <div className="lg:w-52 md:w-48 w-48 h-56 bg-black  my-1">
          <p className="mx-3 text-normal text-center mt-6">
            Video Courses Generated{" "}
          </p>
          <p className="text-center lg:text-7xl md:text-7xl text-7xl my-4">
            28
          </p>
          <button
            className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2.5 "
            onClick={redirectcourse}
          >
            View
          </button>
        </div>
        <div className="lg:w-52 md:w-48 w-48 h-56 bg-black  my-1">
          <p className="mx-3 text-normal text-center mt-6">
            Theory Courses Generated{" "}
          </p>
          <p className="text-center lg:text-7xl md:text-7xl text-7xl my-4">
            18
          </p>
          <button
            className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2.5 "
            onClick={redirectcourse}
          >
            View
          </button>
        </div>
        <div className="lg:w-52 md:w-48 w-48 h-56 bg-black  my-1">
          <p className="mx-3 text-normal text-center mt-8 ">Active Courses </p>
          <p className="text-center lg:text-7xl md:text-7xl text-7xl my-6">
            36
          </p>
          <button
            className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2.5 "
            onClick={redirectcourse}
          >
            View
          </button>
        </div>
        <div className="lg:w-52 md:w-48 w-48 h-56 bg-black  my-1">
          <p className="mx-3 text-normal text-center mt-8 ">
            Completed Courses{" "}
          </p>
          <p className="text-center lg:text-7xl md:text-7xl text-7xl my-6">
            37
          </p>
          <button
            className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2.5  "
            onClick={redirectcourse}
          >
            View
          </button>
        </div>
      </div>
      <div className="my-6 w-1/2">
        <p className="text-lg my-3">Monthly Activity Progress</p>
        <span>
          <p className="w-3/4 text-end mx-4 text-xl">8/10</p>
          <div class="w-3/4 bg-gray-200 rounded-full h-4 dark:bg-gray-700 mx-5">
            <div
              class="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] h-4 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="mx-6 text-sm">Courses Generated this month</p>
        </span>
        <span>
          <p className="w-3/4 text-end mx-4 text-xl">6/10</p>
          <div class="w-3/4 bg-gray-200 rounded-full h-4 dark:bg-gray-700 mx-5">
            <div
              class="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] h-4 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
          <p className="mx-6 text-sm">Active Courses this month</p>
        </span>
        <span>
          <p className="w-3/4 text-end mx-4 text-xl">2/10</p>
          <div class="w-3/4 bg-gray-200 rounded-full h-4 dark:bg-gray-700 mx-5">
            <div
              class="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] h-4 rounded-full"
              style={{ width: "15%" }}
            ></div>
          </div>
          <p className="mx-6 text-sm">Completed Courses this month</p>
        </span>
      </div>
      <p className="text-lg my-4">Recent Courses</p>
      <div className="flex gap-4 flex-wrap">
        {course.map((data, index) => (
          <div className="lg:w-52 md:w-52 w-48 h-60 bg-black my-1" key={index}>
            <img src={data.images} alt="Image" className="w-full" />
            <p className="text-lg mx-2 my-0.5">{data.topic}</p>
            <p className="text-sm mx-2 my-0.5">{data.type}</p>
            <p className="text-sm mx-2 mb-3">{data.date}</p>
            <button
              className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-1.5 "
              onClick={redirectcourse}
            >
              Continue
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
