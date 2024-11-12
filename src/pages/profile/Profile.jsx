import React,{useState} from "react";
import Profiles from "../../assets/profile.png";
import UpdateProfile from "./UpdateProfile";
import UpdatePhone from "./UpdatePhone";

const Profile = () => {
    const [isModal, setIsModal] = useState(false);
    const [isPhoneModal, setIsPhoneModal] = useState(false);

    const CloseEmailModal = () =>{
        setIsModal(!isModal)
    }

    const ClosePhoneModal =() =>{
      setIsPhoneModal(!isPhoneModal)
    }
  return (
    <>
    <div className="mx-5 my-6 font-poppins">
      <div className=" flex flex-col mx-6">
        <img src={Profiles} alt="Image" className="w-40 h-40" />
        <button
          className={` text-base  bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] lg:w-40 md:w-40 w-40 py-2.5 my-3 `}
        >
          Change Image
        </button>
      </div>
      <div className="my-5">
        <p className="font-extralight text-normal">Personal Information</p>
        <hr className="my-3 border-1 border-gray-600 " />
        <div className="grid grid-cols-12 gap-10 font-poppins text-normal font-extralight my-5 mx-2 text-gray-400">
          <div className="lg:col-span-4 md:col-span-4 col-span-12 ">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              className=" py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-400 outline-none  disabled:pointer-events-none"
              placeholder="John"
            />
          </div>
          <div className="lg:col-span-4 md:col-span-4 col-span-12 ">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              className=" py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-400 outline-none  disabled:pointer-events-none"
              placeholder="Doe"
            />
          </div>
          <div className="lg:col-span-4 md:col-span-4 col-span-12 ">
            <label htmlFor="dob">Date Of Birth</label>
            <input
              type="text"
              className=" py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-400 outline-none  disabled:pointer-events-none"
              placeholder="25-12-2024"
            />
          </div>
        </div>
      </div>
      <div className="my-8">
        <p className="font-extralight text-normal">Contact Information</p>
        <hr className="my-3 border-1 border-gray-600 " />
        <div className="grid grid-cols-12 gap-10 font-poppins text-normal font-extralight my-5 mx-2 text-white">
          <div className="lg:col-span-4 md:col-span-4 col-span-12 ">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className=" py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-white outline-none  disabled:pointer-events-none text-white"
                placeholder="johndoe@gmail.com"
              />
            </div>
           <div className="flex justify-center my-2">
           <button
              className={` text-base  bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center px-10 py-2.5 my-3 `}
              onClick={()=>setIsModal(true)}
            >
              Update
            </button>
           </div>
          </div>
          <div className="lg:col-span-4 md:col-span-4 col-span-12 ">
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className=" py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-white outline-none  disabled:pointer-events-none text-white"
                placeholder="1234567890"
              />
            </div>
           <div className="flex justify-center my-2">
           <button
              className={` text-base  bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center px-10 py-2.5 my-3 `}
              onClick={()=>setIsPhoneModal(true)}
            >
              Update
            </button>
           </div>
          </div>
         
        </div>
      </div>
    </div>
    {isModal && <UpdateProfile CloseEmailModal={CloseEmailModal}/>}
    {isPhoneModal && <UpdatePhone ClosePhoneModal={ClosePhoneModal}/>}
    </>

  );
};

export default Profile;
