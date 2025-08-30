"use client";
import showToast from "@/utils/showToast";
import { Check } from "lucide-react";

const Headline = () => {
  return (
    <section className="w-full px-4 pt-12 flex flex-col items-center text-center mt-5 md:mt-10">
      {/* Top navigation text */}
      <p className="text-base text-gray-500 mb-4 font-semibold">
        <span className="pr-2">Homes</span> •{" "}
        <span className="px-2">Hotels</span> •{" "}
        <span className="pl-2">Apartments & more</span>
      </p>

      {/* Main headline */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        List your property on <span className="text-[#2067DA]">FastGo</span>
      </h1>

      {/* Checklist */}
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex items-center justify-center gap-2 text-gray-700 text-lg">
          <Check className="text-[#2067DA] h-5 w-5" />
          Reach 9M+ travelers worldwide
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-700 text-lg">
          <Check className="text-blue-600 h-5 w-5" />
          Get your first booking within a week
        </div>
      </div>

      {/* CTA Button */}
      <button
        className="bg-[#2067DA] cursor-pointer hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-full shadow-md transition"
        onClick={showToast}
      >
        List your property
      </button>
    </section>
  );
};

export default Headline;
