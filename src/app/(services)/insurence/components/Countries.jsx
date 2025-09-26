"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const countries = [
  { name: "Thailand", image: "/images/thailand.jpeg" },
  { name: "UAE", image: "/images/uae.jpeg" },
  { name: "USA", image: "/images/usa.jpeg" },
  { name: "Indonesia", image: "/images/indonesia.jpeg" },
  { name: "Europe", image: "/images/europe.jpeg" },
];

export default function TravelDestination() {
  const [travellers, setTravellers] = useState(1);

  return (
    <div className="space-y-6 font-manrope">
      {/* Heading */}
      <div>
        <h2 className="text-[23.561px] font-semibold text-gray-900">
          Travel Destination
        </h2>
        <p className="text-[14.993px] text-gray-500">
          You can select multiple destinations
        </p>
      </div>

      {/* Popular Destination */}
      <div>
        <h3 className="text-[14.993px] font-medium text-gray-800 mb-2">
          Popular Destination
        </h3>
        <div className="flex gap-4 overflow-x-auto py-2">
          {countries.map((country, idx) => (
            <div
              key={idx}
              className="relative w-[84px] h-[95px] flex-shrink-0 rounded-xl shadow-md overflow-hidden"
            >
              {/* Background image */}
              <Image
                src={country.image}
                alt={country.name}
                fill
                className="object-cover"
              />

              {/* Checkbox */}
              <div className="absolute top-2 left-2 z-10">
                <Checkbox.Root
                  className="w-5 h-5 bg-white rounded-md shadow-md flex items-center justify-center"
                  id={`checkbox-${country.name}`}
                >
                  <Checkbox.Indicator>
                    <CheckIcon className="w-4 h-4 text-blue-600" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </div>

              {/* Country name */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/60 py-1">
                <p className="text-center text-blue-800 font-semibold text-sm">
                  {country.name}
                </p>
              </div>
            </div>
          ))}

          {/* Other Country */}
          <div className="w-[84px] h-[95px] flex-shrink-0 rounded-xl shadow-md bg-white flex flex-col items-center justify-center gap-2">
            <Search className="w-6 h-6 text-blue-600" />
            <p className="text-blue-800 font-semibold text-sm text-center">
              Other <br /> Country
            </p>
          </div>
        </div>
      </div>

      {/* Travel Date & Travellers */}
      <div className="grid grid-cols-2 gap-4">
        {/* Travel Date */}
        <div className="border rounded-xl p-3">
          <p className="text-[12.851px] flex gap-2 font-medium text-gray-800">TRAVEL DATE <svg className="pt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.01278 10.2709L13.6352 4.64844L14.9739 5.98712L8.01278 12.9513L1.05157 5.98712L2.39026 4.64844L8.01278 10.2709Z" fill="#055BC9"/>
</svg></p>
          <p className="text-[14.993px] font-light text-gray-900 mt-1">
            <span className="text-[17.135px] font-bold">2 Jun</span>’25–to-<span className="text-[17.135px] font-bold">3 Jun</span>’25
          </p>
          <p className="text-[17.135px] text-gray-500">Monday Tuesday</p>
        </div>

        {/* Travellers */}
        <div className="border rounded-xl p-3 flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-gray-800">TRAVELLERS</p>
            <p className="text-xs text-gray-500">
              Senior citizens above 70yrs are not covered
            </p>
          </div>
          <div className="flex items-center justify-end gap-3 mt-2">
            <div className="flex items-center gap-2 border-2 shadow-md py-0.5 px-1 rounded-lg">
              <button
              className="w-9 h-9 rounded-md flex items-center justify-center text-[#055BC9] text-lg"
              onClick={() => setTravellers(Math.max(1, travellers - 1))}
            >
              –
            </button>
            <span className="text-base font-semibold w-6 text-center">
              {travellers.toString().padStart(2, "0")}
            </span>
            <button
              className="w-9 h-9 rounded-md flex items-center justify-center text-[#055BC9] text-lg"
              onClick={() => setTravellers(travellers + 1)}
            >
              +
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Special Plans */}
      <div>
        <p className="text-[12.851px] font-semibold text-gray-800 mb-2">
          SPECIAL PLANS (OPTIONAL)
        </p>
        <div className="flex gap-3">
          <button className="px-3 py-1 rounded-md border border-blue-600 text-blue-600 font-[12.851px]">
            Regular
          </button>
          <button className="px-4 py-1.5 rounded-md border text-gray-600 font-[12.851px]">
            Student
          </button>
        </div>
      </div>
    </div>
  );
}
