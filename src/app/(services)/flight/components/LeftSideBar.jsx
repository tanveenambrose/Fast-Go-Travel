"use client";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronUp, CloudMoon, Sun } from "lucide-react";

const LeftSidebarFilters = () => {
  const [priceRange, setPriceRange] = useState([33000]);

  return (
    <div className="space-y-6 md:mb-10">
      {/* Price Range */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <h3 className="font-semibold text-lg mb-5">One Way Price</h3>
        <Slider
          value={priceRange}
          max={60000}
          step={1000}
          onValueChange={setPriceRange}
        />
        <p className="mt-5 text-sm text-gray-600">
          Up to <span className="font-bold">{priceRange}</span> BDT
        </p>
      </div>

      {/* Departure Time */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <h3 className="font-semibold text-lg mb-3">Departure time in Dhaka</h3>
        <div className="flex items-center justify-between">
          <div className="border-2 flex flex-col items-center gap-1 p-1 lg:p-2 rounded-lg">
            <Sun color="blue" />
            <h6 className="font-semibold">Morning</h6>
            <p className="text-sm ">07:00 AM - 11:00 PM </p>
            <p>(45)</p>
          </div>
          <div className="border-2 flex flex-col items-center gap-1 p-1 lg:p-2 rounded-lg">
            <CloudMoon color="blue" />
            <h6 className="font-semibold">Night</h6>
            <p className="text-sm ">07:00 AM - 11:00 PM </p>
            <p>(45)</p>
          </div>
        </div>
      </div>

      {/* Stops */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg mb-3">Stops from Dhaka</h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>
        <div className="space-y-2">
          <label className="flex items-center justify-between">
            <div>
              <Checkbox className="mr-1" /> 1 + Stops (5)
            </div>
            <p>{priceRange} BDT</p>
          </label>
          <label className="flex items-center justify-between">
            <div>
              <Checkbox className="mr-1" /> 1 + Stops (5)
            </div>
            <p>{priceRange} BDT</p>
          </label>
          <label className="flex items-center justify-between">
            <div>
              <Checkbox className="mr-1" /> 1 + Stops (5)
            </div>
            <p>{priceRange} BDT</p>
          </label>
          <label className="flex items-center justify-between">
            <div>
              <Checkbox className="mr-1" /> 1 + Stops (5)
            </div>
            <p>{priceRange} BDT</p>
          </label>
        </div>
      </div>

      {/* Baggage */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg mb-4">
            Check in baggage allowance
          </h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>
        <div className="space-y-2">
          <label className="flex items-center justify-between">
            <div>
              <Checkbox className="mr-1" /> 45 KG
            </div>
            <p>{priceRange} BDT</p>
          </label>
          <label className="flex items-center justify-between">
            <div>
              <Checkbox className="mr-1" /> 30 KG
            </div>
            <p>{priceRange} BDT</p>
          </label>
          <label className="flex items-center justify-between">
            <div>
              <Checkbox className="mr-1" /> 25 KG
            </div>
            <p>{priceRange} BDT</p>
          </label>
          <label className="flex items-center justify-between">
            <div>
              <Checkbox className="mr-1" /> 20 KG
            </div>
            <p>{priceRange} BDT</p>
          </label>
        </div>
      </div>

      {/* Refundable */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg mb-4">Refundable</h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <Checkbox /> Partially refundable (150)
          </label>
          <label className="flex items-center gap-2">
            <Checkbox /> Non refundable (50)
          </label>
        </div>
      </div>

      {/* departing and arriving */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <h3 className="font-semibold text-lg mb-4">Departing From</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <Checkbox /> DAC
          </label>
        </div>

        <h3 className="font-semibold text-lg mt-4 mb-3">Arriving at</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <Checkbox />
            DXB
          </label>
          <label className="flex items-center gap-2">
            <Checkbox /> SHJ
          </label>
        </div>
      </div>

      {/* Transit Time in (Dhaka - Dubai) */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg mb-4">
            Transit Time in (Dhaka - Dubai)
          </h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <Checkbox /> Transit Time in (Dhaka - Dubai)
          </label>
          <label className="flex items-center gap-2">
            <Checkbox /> Less Than Five Hours (107)
          </label>
        </div>
      </div>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full">
        Clear Filters
      </Button>
    </div>
  );
};

export default LeftSidebarFilters;
