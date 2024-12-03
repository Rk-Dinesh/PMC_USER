import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../Host";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubscriptionPlan();
  }, []);

  const fetchSubscriptionPlan = async () => {
    try {
      const response = await axios.get(`${API}/api/getsubscriptionplan`);
      const responseData = response.data.plans;
      setPlans(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6 m-8">
      {plans &&
        plans.map((plan, index) => (
          <div
            class="lg:col-span-3 md:col-span-4 col-span-12 font-poppins font-extralight"
            key={index}
          >
            <div class="flex flex-col p-6 text-center text-white bg-[#000928]   shadow outline-none">
              <h3 class="mb-2 text-xl">{plan.packagename}</h3>
              <div class="flex justify-center items-baseline my-2">
                <span class="mr-2 text-2xl font-semibold">{plan.price}</span>
                <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" class="mb-8 space-y-1 text-left">
                <li class="flex items-center space-x-3">
                  {plan.course === "1" ? (
                    <span>Generate 1 free course</span>
                  ) : (
                    <span>Generate {plan.course} Courses/month</span>
                  )}
                </li>
                <li class="flex items-center space-x-3">
                  <span>Up to {plan.subtopic} subtopics</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span>AI Teacher</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span>Theory & Image Course</span>
                </li>
                <li
                  class={`flex items-center space-x-3 ${
                    plan.coursetype === "Video & Text Course"
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <span>Theory & Video Course </span>
                </li>
              </ul>
              <button
                class="text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-full py-2 "
                onClick={() => {
                  navigate("/payment", {
                    state: {
                      amount: plan.price,
                      receipt:plan.packagename,
                      course:plan.course
                    },
                  });
                }}
              >
                Get started
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Pricing;
