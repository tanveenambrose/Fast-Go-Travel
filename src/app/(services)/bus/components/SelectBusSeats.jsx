"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Armchair, MapPin, ShieldAlert } from "lucide-react";

export default function SelectBusSeat() {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const cols = [1, 2, 3, 4];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const soldSeats = ["D2", "D3", "C3", "D4"]; // Example sold seats

  const toggleSeat = (seat) => {
    if (soldSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="my-5 lg:my-20 p-3 lg:p-6">
      <h1 className="text-xl font-bold md:text-4xl text-[#055BC9] mb-6">
        Select Seats
      </h1>
      <div className=" flex flex-col items-center justify-center">
        <Card className="w-full max-w-md border-slate-400 border-[1px]  p-4 rounded-2xl">
          {/* Header */}
          <div className="flex justify-between text-base font-semibold mt-6 px-4 lg:px-7">
            <div className="text-blue-500  flex flex-col items-center">
              <Armchair />
              <span>Seats</span>
            </div>
            <div className="text-gray-500  flex flex-col items-center">
              <MapPin />
              <span>Trip Details</span>
            </div>
            <div className="text-gray-500  flex flex-col items-center">
              <ShieldAlert />
              <span>Policies</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-around text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 border border-gray-400 rounded-sm"></div>
              Available
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-gray-500 rounded-sm"></div>
              Sold
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
              Selected
            </div>
          </div>

          <div className="border-t border-gray-500"></div>

          {/* Seat Grid */}
          <div className="grid grid-cols-4 gap-4 justify-items-center pb-4 px-2 lg:px-5">
            {rows.map((row) =>
              cols.map((col) => {
                const seat = `${row}${col}`;
                const isSold = soldSeats.includes(seat);
                const isSelected = selectedSeats.includes(seat);

                return (
                  <button
                    key={seat}
                    onClick={() => toggleSeat(seat)}
                    className={cn(
                      "w-10 h-10 flex items-center justify-center rounded-md border text-sm font-medium",
                      isSold && "bg-gray-500 text-white cursor-not-allowed",
                      isSelected && "bg-blue-500 text-white",
                      !isSold &&
                        !isSelected &&
                        "border-gray-400 border-[2px] text-black hover:bg-gray-800 hover:text-white",
                      col == 2 && "mr-7",
                      col == 3 && "ml-7"
                    )}
                  >
                    {seat}
                  </button>
                );
              })
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
