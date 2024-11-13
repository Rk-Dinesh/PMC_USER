import React from "react";
import Modal from "../../components/Modal";

const DeleteAccount = ({handleDeleteCloseModal}) => {
  return (
    <Modal>
      <div className="w-[550px] min-h-[330px] my-4 mx-8 font-extralight font-poppins text-white">
        <p className="text-end text-2xl font-medium" onClick={() => handleDeleteCloseModal()}>X</p>
        <p className="text-center text-lg">Delete Account</p>
        <p className="text-center text-sm my-6 lg:mx-8 md:mx-8 mx-1 font-extralight">
        Are you sure you want to delete your account permanently please note you cannot undo hi action and all your data and subscription will e deleted form our systems permanently
        </p>
        <div className="flex justify-around mt-20 gap-1 flex-wrap ">
          <button
            className={` font-normal   bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center w-36 py-2.5 my-2 `}
          >
           Delete Account
          </button>
          <button
            className={` font-normal bg-white text-black text-center w-36 py-2.5 my-2 `}
            onClick={() => handleDeleteCloseModal()}
          >
             Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAccount;