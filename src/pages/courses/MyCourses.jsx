import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import AllCourse from "./AllCourse";
import image from "../../assets/assest.png";
import { API } from "../../Host";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [courses, setCourses] = useState([]);
  const [processing, setProcessing] = useState(true);
  const userId = localStorage.getItem('user');
  const navigate = useNavigate();
  
  

  useEffect(() => {
    const fetchUserCourses = async () => {

        const postURL = API + `/api/courses?userId=${userId}`;
        try {
            const response = await axios.get(postURL);
            setCourses(response.data);
            setProcessing(false);
        } catch (error) {
            fetchUserCourses();
        }
    };

    fetchUserCourses();
}, [userId]);

const handleCourse = (content, mainTopic, type, courseId, completed, end) => {
  const jsonData = JSON.parse(content)
  localStorage.setItem('courseId', courseId);
  localStorage.setItem('first', completed);
  localStorage.setItem('jsonData', JSON.stringify(jsonData));
  let ending = '';
  if (completed) {
      ending = end;
  }
  navigate('/content', { state: { jsonData: jsonData, mainTopic: mainTopic.toUpperCase(), type: type.toLowerCase(), courseId: courseId, end: ending } });
}

const handleCertificate = (mainTopic, end) => {
  const ending = new Date(end).toLocaleDateString()
  navigate('/viewcertificate', { state: { courseTitle: mainTopic, end: ending } });
}
  const completed = courses.filter((course)=>course.completed === true);

  
  const active = courses.filter((course)=>course.completed !== true);
 
  

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
      
      <div className="mx-1 overflow-auto">{activeTab === "tab1" && <AllCourse  courses={courses} handleCourse={handleCourse} handleCertificate={handleCertificate}/>}</div>
      <div className="mx-1 ">{activeTab === "tab2" && <AllCourse courses={completed}/>}</div>
      <div className="mx-1 ">{activeTab === "tab3" &&<AllCourse  courses={active}/>}</div>
    </div>
  );
};

export default MyCourses;
