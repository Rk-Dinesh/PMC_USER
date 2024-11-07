import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AllCourse from "./AllCourse";

const MyCourses = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="overflow-auto -z-10 " >
      <div className="flex justify-between mt-8 mx-4 flex-wrap gap-3 font-poppins">
        <div className="flex  justify-start gap-3   flex-wrap">
          <div class="relative inline-block">
            <button
              className={` text-lg  py-1.5 w-36  ${
                activeTab === "tab1"
                  ? "text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]"
                  : "text-black bg-white"
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              All Courses
            </button>
            <div class="absolute -top-8 -right-10 w-8 h-8 bg-[#110038] transform rotate-45 -translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div class="relative inline-block">
            <button
              className={`text-lg py-1.5 w-36  ${
                activeTab === "tab2"
                  ? "text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]"
                  : "text-black bg-white"
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              Completed
            </button>
            <div class="absolute -top-8 -right-10 w-8 h-8 bg-[#110038] transform rotate-45 -translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div class="relative inline-block">
            <button
              className={`text-lg  py-1.5 w-36   ${
                activeTab === "tab3"
                  ? "text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]"
                  : "text-black bg-white"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              Active
            </button>
            <div class="absolute -top-8 -right-10 w-8 h-8 bg-[#110038] transform rotate-45 -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white w-96 px-6 py-1.5  rounded-md mr-3">
          <FaSearch className="text-black text-xl" />
          <input
            type="text"
            placeholder="Search By Course Name"
            className="bg-transparent w-full outline-none text-center font-extralight text-black"
          />
        </div>
      </div>
      <hr className="border-2 my-1 border-white mx-1"/>
      
      <div className="mx-1 overflow-auto">{activeTab === "tab1" && <AllCourse />}</div>
      <div className="mx-1 ">{activeTab === "tab2" && <div>Hi</div>}</div>
      <div className="mx-1 ">{activeTab === "tab3" && <div>H3</div>}</div>
    </div>
  );
};

export default MyCourses;
