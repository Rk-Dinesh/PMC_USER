import React, { useState } from "react";

const GenerateCourse = () => {
  const maxSubtopics = 5;
  const [formValues, setFormValues] = useState([{ sub: "" }]);
  const [selectedValue, setSelectedValue] = useState("4");
  const [selectedType, setSelectedType] = useState('Text & Image Course');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleRadioChangeType = (event) => {
    setSelectedType(event.target.value);
};

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    if (formValues.length < maxSubtopics) {
      setFormValues([...formValues, { sub: "" }]);
    } else {
      console.log("You can only add 5 sub topics");
    }
  };

  let removeFormFields = () => {
    let newFormValues = [...formValues];
    newFormValues.pop();
    setFormValues(newFormValues);
  };

  return (
    <div className="my-5 text-white font-poppins ">
      <p className="text-center font-extralight">Generate Course</p>
      <div className=" grid grid-cols-12 gap-3 mx-10 mt-6">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <p className="text-sm font-extralight">
            Type the topic on which you want to Generate course.
          </p>
          <div className="flex flex-col py-8 gap-1">
            <label htmlFor="phone">
              Course Topic <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Topic"
              required
              className="py-2 px-4  rounded-md  text-black shadow-md outline-none lg:w-3/4 md:w-full w-full"
            />
          </div>
          <p className="text-sm font-extralight">
            Select the number of Subtopics you want this course to be spread
            across.
          </p>
          <p className="text-lg py-2">
            No of Subtopic <span className="text-red-600">*</span>
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="value"
                id="4"
                value="4"
                onChange={handleRadioChange}
                checked={selectedValue === "4"}
                className="hidden peer"
              />
              <label htmlFor="4" className="flex items-center cursor-pointer">
                <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                  <span
                    className={`w-3 h-3  ${
                      selectedValue === "4" ? "bg-white" : "hidden"
                    }`}
                  ></span>
                </span>
                <span className="ml-2">5</span>
              </label>
            </div>

            <div className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="value"
                id="7"
                value="7"
                onChange={handleRadioChange}
                checked={selectedValue === "7"}
                className="hidden peer"
              />
              <label htmlFor="7" className="flex items-center cursor-pointer">
                <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                  <span
                    className={`w-3 h-3  ${
                      selectedValue === "7" ? "bg-white" : "hidden"
                    }`}
                  ></span>
                </span>
                <span className="ml-2">10</span>
              </label>
            </div>
          </div>
          <p className="text-sm font-extralight py-5">
            You can enter a list of subtopics, which are the specifics you want
            to learn. You can leave this blank if you want our AI to generate
            the Sub Topics.
          </p>
          <div className="flex flex-col py-4 gap-1 ">
            <label htmlFor="subtopic" value="Sub Topic" className="text-lg">
              Enter Subtopic<span className="text-red-600">*</span>
            </label>
            {formValues.map((element, index) => (
              <div key={index}>
                <input
                  onChange={(e) => handleChange(index, e)}
                  className="py-2 px-4  rounded-md  text-black shadow-md outline-none lg:w-3/4 md:w-full w-full my-1"
                  placeholder="Enter Subtopic"
                  id="subtopic"
                  type="text"
                />
              </div>
            ))}

           <div className={` flex flex-wrap gap-3 `}>
           <button
              className={` text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  py-2.5 ${formValues.length <= 1 ? "lg:w-3/4 md:w-full w-full" :  'lg:w-3/4 md:w-full w-full'}`}
              onClick={() => addFormFields()}
            >
              Add Subtopic
            </button>
            {formValues.length > 1 && (
              <button
                className=" text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] lg:w-3/4 md:w-full w-full  py-2.5 "
                onClick={() => removeFormFields()}
              >
                Remove Subtopic
              </button>
            )}
           </div>
          </div>
        </div>
        <div className=" lg:col-span-6 md:col-span-6 col-span-12 lg:mx-10 md:mx-10">
            <p className="text-sm font-extralight">Choose your course content type</p>
            <p className="text-lg py-2">Course Type  <span className="text-red-600">*</span></p>
        <div className="flex flex-col space-y-4">
            <div className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="value1"
                id="textcourse"
                value="Text & Image Course"
                onChange={handleRadioChangeType}
                checked={selectedType === "Text & Image Course"}
                className="hidden peer"
              />
              <label htmlFor="textcourse" className="flex items-center cursor-pointer">
                <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                  <span
                    className={`w-3 h-3  ${
                        selectedType === "Text & Image Course" ? "bg-white" : "hidden"
                    }`}
                  ></span>
                </span>
                <span className="ml-2">Theory & Image Course</span>
              </label>
            </div>

            <div className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="value1"
                id="videocourse"
                value="Video & Text Course"
                onChange={handleRadioChangeType}
                checked={selectedType === "Video & Text Course"}
                className="hidden peer"
              />
              <label htmlFor="videocourse" className="flex items-center cursor-pointer">
                <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                  <span
                    className={`w-3 h-3  ${
                        selectedType === "Video & Text Course" ? "bg-white" : "hidden"
                    }`}
                  ></span>
                </span>
                <span className="ml-2">Video & Theory Course</span>
              </label>
            </div>
          </div>
         <div className="flex justify-center">
         <button
              className={` text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] lg:w-1/2 md:w-3/4 w-full py-2.5 my-5 `}
            >
             Generate Course
            </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateCourse;
