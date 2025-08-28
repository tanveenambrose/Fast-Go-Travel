"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Bed,
  BedDouble,
  BedSingle,
  Building,
  Building2,
  CarFront,
  ChevronUp,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const HotelLeftSideBar = () => {
  const [priceRange, setPriceRange] = useState([10000]);

  return (
    <div className="space-y-6 md:mb-10">
      {/* Price Range */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <h3 className="font-semibold text-lg mb-5">Budget Per Night</h3>
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
      {/* Bus Type */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg mb-3">Property type</h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-base flex items-center">
            <Checkbox className="mr-3" />
            <div className="flex gap-3 items-center">
              <Bed color="#989898" size={17} />
              Hotels
            </div>
          </label>
          <label className="text-base flex items-center">
            <Checkbox className="mr-3" />
            <div className="flex gap-3 items-center">
              <Building2 color="#989898" size={17} />
              Apartments
            </div>
          </label>
          <label className="text-base flex items-center">
            <Checkbox className="mr-3" />
            <div className="flex gap-3 items-center">
              <Building color="#989898" size={17} />
              Hostels
            </div>
          </label>
        </div>
      </div>

      {/* room type */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg mb-4">Room type</h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-base flex items-center">
            <Checkbox className="mr-3" />
            <div className="flex gap-3 items-center">
              <BedDouble color="#989898" size={17} />
              Double Bed
            </div>
          </label>
          <label className="text-base flex items-center">
            <Checkbox className="mr-3" />
            <div className="flex gap-3 items-center">
              <BedSingle color="#989898" size={17} />
              Single Bed
            </div>
          </label>
        </div>
      </div>

      {/* Services */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-base flex items-center">
            <Checkbox className="mr-3" />
            <div className="flex gap-3 items-center">
              <UtensilsCrossed color="#989898" size={17} />
              Breakfast included
            </div>
          </label>
          <label className="text-base flex items-center">
            <Checkbox className="mr-3" />
            <div className="flex gap-3 items-center">
              <Wifi color="#989898" size={17} />
              Free WIFI
            </div>
          </label>
          <label className="text-base flex items-center">
            <Checkbox className="mr-3" />
            <div className="flex gap-3 items-center">
              <CarFront color="#989898" size={17} />
              24-hour reception
            </div>
          </label>
        </div>
      </div>

      {/* Rating */}
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg mb-4">Star Rating</h3>
          <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
        </div>
        <div className="space-y-2 flex flex-col">
          {Array(5)
            .fill()
            .map((_, i) => (
              <label key={i} className="text-base flex items-center">
                <Checkbox className="mr-3" />
                {Array(5 - i)
                  .fill()
                  .map((_, j) => (
                    <span
                      key={`${i}-${j}`}
                      className="text-yellow-300 mr-1 text-lg"
                    >
                      ★
                    </span>
                  ))}
              </label>
            ))}
        </div>
      </div>

      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <h3 className="font-semibold text-lg mb-4">Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902062607485!2d90.39166351543114!3d23.7508854946498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894efbdcd7f%3A0x6a86b4ddc88d7a99!2sDhaka%20City!5e0!3m2!1sen!2sbd!4v1693471364017!5m2!1sen!2sbd"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full">
        Clear Filters
      </Button>
    </div>
  );
};

export default HotelLeftSideBar;
