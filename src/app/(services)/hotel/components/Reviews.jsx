"use client";
import showToast from "@/utils/showToast";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <div className="mt-20 mx-5 md:mx-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">Guest Reviews</h2>
      <div className=" rounded-xl shadow-md p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-3">
            <p className="text-4xl font-bold text-[#0A60F9] leading-none">
              8.7
            </p>
            <div className="flex flex-col items-center text-yellow-500 mt-1">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-1">2,345 reviews</p>
            </div>
          </div>
          {/* locatin */}
          <div className="flex items-center justify-start gap-7 md:mt-3">
            <span>Location</span>
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>
          </div>
          {/* service */}
          <div className="flex items-center justify-start gap-9">
            <span>Service</span>
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col-reverse md:flex-col gap-4 text-base text-gray-700">
          {/* Rating Button */}
          <div className="w-full flex items-center justify-end">
            <button
              className="px-10 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#0A60F9] to-[#B004FE] hover:from-purple-600 hover:to-purple-700 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
              onClick={showToast}
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              Give Rating
            </button>
          </div>
          <div className="flex items-center justify-start md:justify-end gap-14 md:mt-3">
            <p>Cleanliness</p>
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-14">
            <span>Value for money</span>
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
