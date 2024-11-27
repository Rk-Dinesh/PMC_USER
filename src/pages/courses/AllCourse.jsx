import React from "react";
import image from "../../assets/assest.png";
import { useNavigate } from "react-router-dom";

const AllCourse = ({course}) => {
  const navigate = useNavigate();
   const redirectcontent = () =>{
    navigate('/content')
   }
   const redirectcertificate = () =>{
    navigate('/viewcertificate')
   }

  return (
    <div className="grid grid-cols-12 gap-3 mx-2 mt-6 ">
      {course.map((courses, index) => (
        <div
          className="lg:col-span-3 md:col-span-4 col-span-12 overflow-hidden shadow-lg bg-[#110038] font-poppins font-extralight"
          key={index}
        >
          <img className="w-full" src={courses.photo} alt="Images" />
          <div className="px-4 py-3">
            <div className="text-lg"> {courses.mainTopic}</div>
            <p className="text-base">{courses.type}</p>
            <p className="text-base">{courses.date}</p>
          </div>
          <button className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2.5 font-normal "
          onClick={redirectcontent}>
            Continue
          </button>
          {courses.certificate === "yes" && (
            <button className=" text-lg bg-white text-black w-1/2 py-2.5 font-normal"
            onClick={redirectcertificate}
            >
              Certificate
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllCourse;
