// components/TravellerForm.jsx
"use client";
import { useState } from "react";
import TravellerDetails from "./TravellerDetails";
import PrimaryDetails from "./PrimaryDetails";

export default function TravellerForm({ plan }) {
  const [travellers, setTravellers] = useState([
    { fullName: "", dob: "", gender: "" },
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 font-manrope gap-6">
      {/* LEFT SIDE SUMMARY */}
      <div className="p-6">
        <h2 className="text-[40.198px] font-semibold mb-4">Add Travellers</h2>
        <div className="flex flex-col mb-4 items-start self-stretch gap-[9.458px] px-[29.321px] pt-[28.612px] pb-[29.321px] rounded-[12px]  border-[1.5px] border-[#E4E6E8] bg-white">
          <p className="text-[#161616] text-[26.011px] font-bold leading-normal not-italic">UAE</p>
          <p className="text-[16.552px] text-[#161616]"><span className=" font-bold">2 Jun’</span>25 –To– <span className="font-bold">4 Jun’</span>25 | 1 Traveller</p>
        </div>
        <div className="flex flex-col items-start self-stretch gap-[4.729px] p-[29.321px] rounded-[12px] border-[1.5px] border-[#E4E6E8] bg-white">
          <p className="text-[#055BC9] text-[16.552px] font-bold not-italic leading-[23.646px]">INSURANCE</p>
          <h3 className="text-[#161616] text-[16.552px] font-bold not-italic leading-[23.646px]">{plan.title}</h3>
          <p className="text-[#161616] text-[16.552px] font-bold not-italic leading-[23.646px]">{plan.subtitle}</p>
          <p className="text-[#161616] pb-3 text-[16.552px] font-bold not-italic leading-[23.646px]">
            Sum insured: ৳{plan.discountedPrice}
          </p>
          <p className="text-[#161616] text-[16.552px] font-bold not-italic leading-[23.646px]">Amount to pay: ৳ {plan.originalPrice} ৳ {plan.discountedPrice}</p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="p-6 border rounded-lg shadow-sm">
        <h2 className="text-[#161616] text-[24px] font-bold not-italic leading-[130%]">Traveller Details</h2>
        <p className="text-[#989898] text-[16px] font-semibold not-italic leading-[160%] pb-6">Covers Bangladeshi citizens between age of 6 months and 70 years</p>


          {/* Traveller Details Component */}
        <TravellerDetails/>

        {/* Personal Contact */}
        
        <PrimaryDetails/>

        {/* Continue Button */}
        <button className="w-full mt-6 rounded-[100px] bg-[linear-gradient(100deg,#0A60F9_-0.05%,#B004FE_93.06%)] shadow-[0_0.976px_6.829px_0_rgba(0,0,0,0.21)] text-[16px] text-[#FFF] font-semibold px-4 py-3">
          Continue
        </button>
      </div>
    </div>
  );
}
