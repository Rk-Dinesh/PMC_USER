import React from "react";
import Logo from "../../assets/PMC_Logo.png";

const Invoice = () => {
  return (
    <div className="mx-5 my-6 font-poppins font-extralight">
      <div className="max-w-xl h-auto bg-white py-1 px-2">
        <span className="flex justify-center">
          <img src={Logo} alt="Image" className="w-44" />
        </span>
        <div className="grid grid-cols-12 gap-3 text-black mx-3">
          <div className="col-span-6 ">
            <p>Payment Method:</p>
            <p>Plan:</p>
            <p>Subscription ID:</p>
            <p>Customer ID:</p>
            <p>Amount:</p>
          </div>
          <div className="col-span-6 ">
            <p>STRIPE</p>
            <p>Monthly Plan</p>
            <p>sub_1Pgimc01PbsRdqnLURNt6vId</p>
            <p>cus_QXoP8hrt4tOqIh</p>
            <p>1 USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
