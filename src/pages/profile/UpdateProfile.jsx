import React, { useState } from "react";
import Modal from "../../components/Modal";

const UpdateProfile = ({ CloseEmailModal }) => {
  const [stepModal, setStepModal] = useState(false);

  const handle2Modal = () =>{
    setStepModal(false);
    CloseEmailModal()
  }
  return (
    <>
      <Modal>
        <div className="w-[550px] min-h-[330px] my-4 mx-8 font-extralight font-poppins">
          <p
            className="text-end text-2xl font-medium"
            onClick={() => CloseEmailModal()}
          >
            x
          </p>
          <p className="text-center text-lg my-4">Update Email</p>
          <p className="text-center text-sm lg:mx-12 md:mx-12 mx-4 my-8">
            Enter you’re your new email id (please note we will be sending a
            verification link to your new email id)
          </p>
          <div className="lg:mx-6 md:mx-6 mx-1">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="text"
              className=" py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-400 outline-none  disabled:pointer-events-none my-3"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="flex justify-center my-8">
            <button
              className={` font-normal   bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center w-36 py-2.5 my-2 `}
              onClick={()=>setStepModal(true)}
            >
              Verify
            </button>
          </div>
        </div>
      </Modal>
      {stepModal && (
        <Modal>
          <div className="w-[550px] min-h-[330px] my-4 mx-8 font-extralight font-poppins">
            <p className="text-end text-2xl font-medium" onClick={()=> handle2Modal()} >x</p>
            <p className="text-center text-lg my-4">Update Email</p>
            <p className="text-center text-normal lg:mx-12 md:mx-12 mx-4 my-16">
              We have sent you an verification link on your email please verify
              your email to continue
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default UpdateProfile;
