import React, { useState } from "react";
import PMCLogo from "../../assets/PMC_Logo.png";
import { IoNotifications } from "react-icons/io5";
import profile from "../../assets/profile.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Headers = ({ Menus }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notify, setNotify] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglenotify = () => {
    setNotify(!notify);
  };

  const redirectnotify = () => {
    setNotify(!notify);
    navigate('/notify')
  }


  return (
    <div className="flex justify-between items-center px-3 bg-gradient-to-r from-[#110038] to-[#08006B] z-50 fixed w-full">
      <img src={PMCLogo} alt="PickMyCourse" className="w-42 h-14" />

      <p
        className="text-2xl text-white md:block lg:hidden block"
        onClick={toggleDropdown}
      >
        Menu
      </p>

      {isDropdownOpen && (
        <div className="absolute right-0 top-14 w-full bg-[#200098] text-white shadow-md lg:hidden md:block block">
          <div className="flex gap-2 items-center pt-3 mx-3">
            <img src={profile} alt="User" className="w-14 h-14" />
            <div>
              <p className="text-xl font-extralight">Hello! John Doe</p>
              <p className="text-xs font-extralight pt-1">Subscription: Gold</p>
              <p className="text-xs font-extralight whitespace-nowrap py-1">
                Subscription Expiry: 12/12/26
              </p>
            </div>
          </div>
          <ul className="flex flex-wrap py-5 ">
            {Menus.map((menu, index) => (
              <NavLink to={menu.to} onClick={menu.onClick} key={index}>
                <li
                  className={`cursor-pointer text-md flex items-center gap-x-3 p-2 mt-1 pl-3 transition-all duration-700 ${
                    location.pathname === menu.to
                      ? "text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]"
                      : "text-white"
                  }`}
                  onClick={toggleDropdown}
                >
                  <div className="flex items-center gap-x-6 px-2">
                    <img src={menu.icon} alt="icons" className="w-6 h-6" />
                    <span className="font-poppins text-lg flex-1 duration-300 whitespace-nowrap">
                      {menu.title}
                    </span>
                  </div>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}

      <div className="">
        <IoNotifications
          className="lg:w-7 lg:h-7 md:w-6 md:h-6 w-5 h-5 text-white cursor-pointer"
          onClick={togglenotify}
        />
      </div>
      {notify && (
        <div className="absolute text-black right-2 top-10 bg-white w-80 h-fit pt-3 font-poppins font-extralight">
          <p className="px-2">Notifications</p>
          <hr />
          <span className=" flex gap-1 justify-between px-3 py-2">
            <p className="text-normal text-slate-600">
              Subject: Lhoereemmis apilsiudmenistered a dummy Text
            </p>
            <button className="text-sm text-black font-normal " onClick={redirectnotify}>View</button>
          </span>
          <hr />
          <span className=" flex gap-1 justify-between px-3 py-2">
            <p className="text-normal text-slate-600">
              Subject: Lhoereemmis apilsiudmenistered a dummy Text
            </p>
            <button className="text-sm text-black font-normal " onClick={redirectnotify}>View</button>
          </span>

          <button className="w-full bg-slate-400 text-lg py-1" onClick={redirectnotify}>See all</button>
        </div>
      )}
    </div>
  );
};

export default Headers;
