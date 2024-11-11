import React from "react";
import { FaSearch } from "react-icons/fa";
import Accordion from "../../components/Accordion";

const FAQ = () => {
 
  const Accdata = [
    {
      title: "What is lorem Ipsum used for?",
      content:
        "Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose. Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose",
    },
    {
      title: "What is lorem Ipsum used for?",
      content:
        "Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose. Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose",
    },
    {
      title: "What is lorem Ipsum used for?",
      content:
        "Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose. Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose",
    },
    {
        title: "What is lorem Ipsum used for?",
        content:
          "Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose. Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose",
      },
      {
        title: "What is lorem Ipsum used for?",
        content:
          "Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose. Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose",
      },
      {
        title: "What is lorem Ipsum used for?",
        content:
          "Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose. Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose",
      },
       {
      title: "What is lorem Ipsum used for?",
      content:
        "Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose. Lorem ipsum is a dummy text used for type setting instead of real text only for demonstration purpose",
    },
  ];

  return (
    <div className="mx-4 my-6 font-poppins">
      <div className="flex justify-between items-center flex-wrap gap-3 mx-2">
        <p className="text-lg font-extralight">FAQ</p>
        <div className="flex items-center gap-3 bg-white w-96 px-6 py-1.5  rounded-md mr-1">
          <FaSearch className="text-black text-xl" />
          <input
            type="text"
            placeholder="Search by topic"
            className="bg-transparent w-full outline-none text-center font-extralight text-black"
          />
        </div>
      </div>
      <hr className="my-2 " />
       {Accdata.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
    </div>
  );
};

export default FAQ;
