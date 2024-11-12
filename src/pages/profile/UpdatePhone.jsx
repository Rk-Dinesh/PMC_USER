import React from 'react'
import Modal from '../../components/Modal'

const UpdatePhone = ({ClosePhoneModal}) => {
  return (
    <Modal>
        <div className="w-[530px] min-h-[330px] my-3 mx-8 font-extralight font-poppins">
        <p
            className="text-end text-2xl font-medium"
           onClick={()=>ClosePhoneModal()}
          >
            x
          </p>
          <p className="text-center text-lg my-2">Update Phone</p>
          <p className="text-center text-sm lg:mx-12 md:mx-12 mx-4 my-6">
          Enter you’re your new Phone Number(please note we will be sending a OP to your new phone number)
          </p>
          <div className="lg:mx-6 md:mx-6 mx-1 my-8">
            <label htmlFor="phone" className="text-normal">
              Phone
            </label>
            <input
              type="text"
              className=" py-1 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-400 outline-none  disabled:pointer-events-none my-3"
              placeholder="1234567890"
            />
          </div>
          <div className="flex justify-center my-8">
            <button
              className={` font-normal   bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center w-36 py-2.5 my-2 `}
            >
              Verify
            </button>
          </div>
        </div>
    </Modal>
  )
}

export default UpdatePhone