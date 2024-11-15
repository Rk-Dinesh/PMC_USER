import React from "react";
import certificate from "../../assets/certificate.png";
import Logo from "../../assets/PMC_Logo.png";

const ViewCertificate = () => {
  return (
    <div className="relative font-poppins my-12">
      {/* Image is relative and serves as the background */}
      <img src={certificate} alt="Certificate" className="w-full max-w-3xl h-auto mx-auto" />

      {/* Absolute positioning for the content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <img
          src={Logo}
          alt="Logo"
          className="  lg:w-72  md:w-72 w-60 mx-6 my-2" // Adjust logo size for responsiveness
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          CERTIFICATE OF COMPLETION
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6">This is to certify that</p>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-5">
          John Doe
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-8">
          has successfully completed the course on
        </p>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Course Topic
        </h3>
        <p className="text-sm sm:text-base md:text-lg mb-4">on 01/10/2024</p>
      </div>
      <div className="flex justify-center my-8 ">
          <button className=" text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-52 py-2.5 ">
            Download certificate
          </button>
        </div>
    </div>
  );
};

export default ViewCertificate;