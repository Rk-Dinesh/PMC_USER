import React, { useState } from "react";
import Headers from "../layout/Headers";
import { useNavigate } from "react-router-dom";
import ContentAcc from "../../components/ContentAcc";
import { FaCaretSquareLeft } from "react-icons/fa";
import assest from "../../assets/assest.png";
import robot from "../../assets/robot.png";

const Content = () => {
  const navigate = useNavigate();
  const [ask, setAsk] = useState(false);

  const handleAsk = () => {
    setAsk(!ask);
  };

  const redirectcourse = () => {
    navigate("/course");
  };

  const Accdata = [
    {
      title: "SubTopic Name",
      content: [
        "Lesson Name Lorem Ipsum ",
        "Lesson Name Lorem Ipsum is a dummy text",
        "Lesson Name Lorem Ipsum is a dummy text",
      ],
    },
    {
      title: "SubTopic Name",
      content: [
        "Lesson Name Lorem Ipsum ",
        "Lesson Name Lorem Ipsum is a dummy text",
        "Lesson Name Lorem Ipsum is a dummy text",
      ],
    },
    {
      title: "SubTopic Name",
      content: [
        "Lesson Name Lorem Ipsum ",
        "Lesson Name Lorem Ipsum is a dummy text",
        "Lesson Name Lorem Ipsum is a dummy text",
      ],
    },
  ];

  return (
    <div className="font-poppins font-extralight ">
      <Headers />
      <div className=" flex w-full h-screen pt-14  ">
        <div className=" w-3/12 bg-[#200098] text-white">
          <span
            className=" flex gap-2 mx-4 items-center"
            onClick={redirectcourse}
          >
            <FaCaretSquareLeft className="text-lg" />
            <p className="my-3"> Back to Home</p>
          </span>
          {Accdata.map(({ title, content }) => (
            <ContentAcc title={title} content={content} />
          ))}
        </div>
        <div className="w-9/12 bg-gradient-to-b from-[#110038] via-[#150243] to-[#300080] text-white relative overflow-auto no-scroll ">
          <div className="mx-6 my-8 ">
            <p className="text-lg ">Topic Name</p>
            <p className="text-lg mt-5">Lesson Name</p>
            <img src={assest} alt="Image" className="my-3 w-[500px]" />
            <p className="font-normal mt-6">
              Eisenhower Matrix: A Simple Guide to Prioritizing Tasks
              Introduction:
            </p>
            <p className="lg:w-1/2 md:w-1/2 w-full">
              Do you ever feel overwhelmed by the amount of tasks on your to-do
              list? The Eisenhower Matrix is a tool that can help you prioritize
              tasks based on their importance and urgency.
            </p>
            <p className="lg:w-1/2 md:w-1/2 w-full mt-3">
              Quadrants: <br /> The matrix divides tasks into four quadrants: Do
              First (Urgent and Important): Tasks that are essential for your
              success and need immediate attention. Schedule (Important but Not)
            </p>
          </div>
          <img
            src={robot}
            alt="Image"
            className={`absolute w-24 h-24  right-14 bottom-12 ${ask === true ? 'hidden' : '' }`}
            onClick={handleAsk}
          />
        </div>
        {ask && (
          <div className=" bg-[#200098] z-10 w-2/6 right-0  p-6 text-white  ">
            <div className="my-8">
            <p className="text-center">
              Hey there! I'm your AI teacher. If you have any questions about
              your Topic Name course, whether it's about videos, images, or
              theory, just ask me. I'm here to clear your doubts.
            </p>
            <textarea
              name=""
              id=""
              rows={4}
              className="w-full rounded-xl place-content-center text-center outline-none mt-56"
              placeholder="Ask Something"
            ></textarea>
            <div className=" flex justify-center">
              <button
                className={` text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] lg:w-1/2 md:w-3/4 w-full py-2.5 my-5 `}
                onClick={handleAsk}
              >
                Submit
              </button>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
