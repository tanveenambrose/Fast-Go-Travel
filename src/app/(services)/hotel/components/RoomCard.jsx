"use client";
import showToast from "@/utils/showToast";
import { Flower, Milk, Wifi } from "lucide-react";
import Image from "next/image";

export default function RoomCard({ title, size, beds, price, img }) {
  return (
    <div className="shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-4 border-2 mx-5 md:mx-0 transition-transform transform hover:scale-[1.01] duration-300">
      <div className="rounded-lg w-full h-[200px] md:w-[213px] md:h-[160px] overflow-hidden relative">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="flex-1 md:ml-5">
        <h2 className="font-semibold text-2xl md:text-3xl">{title}</h2>
        <p className="text-gray-400 text-sm mt-2">
          <span className="mr-2">{size}</span> •{" "}
          <span className="ml-2">{beds}</span>
        </p>
        <div className="flex items-center gap-3 my-4">
          <Wifi size={17} />
          <Milk size={17} />
          <Flower size={17} />
        </div>
        <p className="text-xl mt-2">
          <span className="font-bold ">{price}/</span>
          <span className="text-sm"> night</span>
        </p>
      </div>

      <button
        className="px-5 mt-auto w-full md:w-1/4 py-2 bg-gradient-to-r from-[#0A60F9] to-[#B004FE] hover:from-purple-600 hover:to-purple-700 transition-colors duration-300 rounded-lg font-medium text-white cursor-pointer"
        onClick={showToast}
      >
        Select Room
      </button>
    </div>
  );
}
