"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const BusLeftSideBar = () => {
  const operators = [
    "Ena Transport (Pvt) Ltd",
    "Soudia Coach Service",
    "Soudia Coach Service",
    "Soudia Coach Service",
    "Shyamoli Paribahan",
  ];

  const boardingPoints = [
    "Gabtoli AC Counter",
    "Saydabad B 5 Counter",
    "Kalabagan Bus Point",
    "Arambag Bus Point",
    "Azampur Bus Point",
    "SAYEDABAD",
  ];

  return (
    <div className="space-y-6 md:mb-10">
      {/* Bus Type */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg mb-3">Bus Type</h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-base">
            <Checkbox className="mr-2" />
            AC
          </label>
          <label className="text-base">
            <Checkbox className="mr-2" />
            Non-AC
          </label>
        </div>
      </div>

      {/* Operator */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg mb-4">Operator</h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>
        <div className="space-y-2">
          {operators.map((op, i) => (
            <label key={i} className="flex items-center gap-2">
              <Checkbox /> {op}
            </label>
          ))}
        </div>
      </div>

      {/* Boarding point */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg mb-4">Boarding Point</h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>
        <div className="space-y-2">
          {boardingPoints.map((b, i) => (
            <label key={i} className="flex items-center gap-2">
              <Checkbox /> {b}
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full">
        Clear Filters
      </Button>
    </div>
  );
};

export default BusLeftSideBar;
