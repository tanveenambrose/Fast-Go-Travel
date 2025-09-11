"use client";

import Image from "next/image";

export default function ItineraryCard({ day, title, description, image }) {
  const lines = description.split("\n").filter(Boolean);

  return (
    <div className="flex w-full">
      {/* Timeline left side with circle + line */}
      <div className="hidden md:flex flex-col items-center mr-6">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          {day}
        </div>
        {/* connector line */}
        <div className="flex-1 w-1 bg-blue-600"></div>
      </div>

      {/* Content box */}
      <div className="flex-1 mb-5">
        {/* Header */}
        <div className="bg-blue-50 px-4 py-2 border border-gray-300 border-b-0 rounded-t-md">
          <h3 className="text-sm md:text-base font-semibold text-gray-800">
            Day {day} {title}
          </h3>
        </div>

        {/* Card body */}
        <div className="border border-gray-300 rounded-b-md p-4 shadow-sm bg-white">
          <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
            {lines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>

          {image && (
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {image.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-32 rounded-md overflow-hidden border"
                >
                  <Image
                    src={img}
                    alt={`Day ${day} image`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
