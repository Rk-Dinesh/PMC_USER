import React, { useState } from "react";
import Modal from "../../components/Modal";

const UpdateImage = ({ CloseProfileModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Image, setBase64Image] = useState("");
  const [preview, setPreview] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert("Please select a file!");
      return;
    }
    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSizeInBytes) {
      alert("File size exceeds 1MB!");
      return;
    }
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      setBase64Image(base64String);
      setPreview(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("No file selected!");
      return;
    }

    const payload = {
      name: selectedFile.name,
      image: base64Image,
    };

    console.log(payload);


  };
  return (
    <Modal>
      <div className="w-[530px] min-h-[330px] my-3 mx-8 font-extralight font-poppins">
        <p
          className="text-end text-2xl font-medium"
          onClick={() => CloseProfileModal()}
        >
          x
        </p>
        <p className="mx-16 text-xl my-2">Choose Profile Image</p>

        <div className="relative mt-6 mx-16 ">
                <label className="block bg-white rounded-lg">
                  <span className="sr-only">Choose File</span>
                  <input type="file" className="hidden" id="file-input" onChange={handleFileChange}  />
                  <button
                    className="bg-gray-300 text-black px-4 py-2.5 rounded-md"
                    for="file-input"
                  >
                    Choose Files
                  </button>
                </label>
                <span
                  className="absolute top-1/2 -translate-y-1/2 lg:right-4 md:right-4 right-16 text-normal text-black"
                  id="file-name"
                >
                  No Files Chosen
                </span>
              </div>
        {preview && (
        <div className="text-center text-lg my-2">
            <p className="text-center text-xl my-2">Preview </p>
          <img
            src={preview}
            alt="Preview"
           className="w-60 mx-auto"
          />
        </div>
      )}
       <div className="flex justify-center my-8">
            <button
              className={` font-normal   bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center w-36 py-2.5 my-2 `}
              onClick={handleUpload}
            >
              Upload Image
            </button>
          </div>
      </div>
    </Modal>
  );
};

export default UpdateImage;
