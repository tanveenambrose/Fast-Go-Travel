"use client";
import showToast from "@/utils/showToast";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
      <button
        className="px-[10px] py-[10px] border rounded-md  text-gray-700 cursor-pointer hover:bg-gray-100"
        onClick={showToast}
      >
        <ChevronLeft size={20} />
      </button>
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          onClick={showToast}
          className={`px-4 py-2 border rounded-md  text-gray-700  ${
            page == 1
              ? "bg-[#055BC9] text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={showToast}
        className="px-[10px] py-[10px] border rounded-md  text-gray-700 cursor-pointer hover:bg-gray-100"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
