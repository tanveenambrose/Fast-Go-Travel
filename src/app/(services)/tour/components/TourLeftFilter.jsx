"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Plane, PlaneTakeoff } from "lucide-react";

export default function TourLeftFilter() {
  const [price, setPrice] = useState([100000]);
  const [duration, setDuration] = useState([5]);

  return (
    <div className="w-full border rounded-xl p-4 space-y-6 bg-white shadow-sm">
      <h2 className="font-semibold text-lg">Filter by:</h2>

      {/* Price */}
      <div>
        <label className="text-sm font-medium">Price</label>
        <Slider
          value={price}
          onValueChange={setPrice}
          min={0}
          max={200000}
          step={1000}
          className="mt-2"
        />
        <p className="text-xs text-gray-600 mt-1">
          ৳0 – ৳{price[0].toLocaleString()}
        </p>
      </div>

      {/* Theme */}
      <div>
        <label className="text-sm font-medium">Theme</label>
        <div className="flex flex-col gap-2 mt-2">
          {["Europe", "Desert", "Beach"].map((theme) => (
            <div key={theme} className="flex items-center gap-2">
              <Checkbox id={theme} />
              <label htmlFor={theme} className="text-sm">
                {theme}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Package Type */}
      <div>
        <label className="text-sm font-medium">Package type</label>
        <div className="flex items-center gap-2 mt-2">
          <Checkbox id="group" />
          <label htmlFor="group" className="text-sm">
            Group
          </label>
        </div>
      </div>

      {/* Duration */}
      <div>
        <label className="text-sm font-medium">Duration</label>
        <Slider
          value={duration}
          onValueChange={setDuration}
          min={2}
          max={7}
          step={1}
          className="mt-2"
        />
        <p className="text-xs text-gray-600 mt-1">{duration[0]} days</p>
      </div>

      {/* Flight */}
      <div>
        <label className="text-sm font-medium">Flight</label>
        <div className="flex flex-col gap-2 mt-2">
          <Button
            variant="outline"
            size="sm"
            className="justify-start flex gap-2"
          >
            <Plane className="w-4 h-4" /> With Flight (0)
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="justify-start flex gap-2"
          >
            <PlaneTakeoff className="w-4 h-4" /> Without Flight (1)
          </Button>
        </div>
      </div>
    </div>
  );
}
