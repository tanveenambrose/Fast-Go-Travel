"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon, Search } from "lucide-react";
import Image from "next/image";

const countries = [
  {
    name: "Thailand",
    image: "/images/thailand.jpeg",
  },
  {
    name: "UAE",
    image: "/images/uae.jpeg",
  },
  {
    name: "USA",
    image: "/images/usa.jpeg",
  },
  {
    name: "Indonesia",
    image: "/images/indonesia.jpeg",
  },
  {
    name: "Europe",
    image: "/images/europe.jpeg",
  },
];

export default function Countries() {
  return (
    <div className="flex gap-4 overflow-x-auto py-4">
      {countries.map((country, idx) => (
        <div
          key={idx}
          className="relative w-32 h-40 flex-shrink-0 rounded-xl shadow-md overflow-hidden"
        >
          {/* Background image */}
          <Image
            src={country.image}
            alt={country.name}
            fill
            className="object-cover"
          />

          {/* Checkbox (top-left) */}
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

          {/* Country name overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/60 py-1">
            <p className="text-center text-blue-800 font-semibold text-sm">
              {country.name}
            </p>
          </div>
        </div>
      ))}

      {/* Other Country card */}
      <div className="w-32 h-40 flex-shrink-0 rounded-xl shadow-md bg-white flex flex-col items-center justify-center gap-2">
        <Search className="w-6 h-6 text-blue-600" />
        <p className="text-blue-800 font-semibold text-sm text-center">
          Other <br /> Country
        </p>
      </div>
    </div>
  );
}
