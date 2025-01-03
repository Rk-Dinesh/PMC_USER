import React, { useEffect } from "react";
import Modal from "../../components/Modal";
import { API } from "../../Host";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const phoneSchema = yup.object().shape({
  phone: yup.string().required("Phone is required"),
});

const UpdatePhone = ({ ClosePhoneModal }) => {
  const email = localStorage.getItem("email");
  const oldPhone = localStorage.getItem("phone");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(phoneSchema),
  });

  useEffect(() => {
    if (oldPhone) {
      setValue("phone", oldPhone);
    }
  }, [oldPhone, setValue]);

  const onsubmit = async (data) => {
    const formData = {
      ...data,
    };

    try {
      const response = await axios.post(
        `${API}/api/phoneupdate?email=${email}`,
        formData
      );
      if (response.status === 200) {
        toast.success("Phone updated successfully");
        localStorage.setItem("phone", data.phone);
        ClosePhoneModal()
      } else {
        toast.error("Failed to update email");
        console.log("Error in posting data");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while updating email");
    }
  };

  return (
    <Modal>
      <div className="w-[530px] min-h-[330px] my-3 mx-8 font-extralight font-poppins">
        <p
          className="text-end text-2xl font-medium"
          onClick={() => ClosePhoneModal()}
        >
          x
        </p>
        <p className="text-center text-lg my-2">Update Phone</p>
        <p className="text-center text-sm lg:mx-12 md:mx-12 mx-4 my-6">
          Enter you’re your new Phone Number(please note we will be sending a OTP
          to your new phone number)
        </p>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="lg:mx-6 md:mx-6 mx-1 my-8">
            <label htmlFor="phone" className="text-normal">
              Phone
            </label>
            <input
              type="text"
              className=" py-1 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-400 outline-none  disabled:pointer-events-none my-3"
              placeholder="1234567890"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex justify-center my-8">
            <button
              className={` font-normal   bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center w-36 py-2.5 my-2 `}
              type="submit"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdatePhone;
