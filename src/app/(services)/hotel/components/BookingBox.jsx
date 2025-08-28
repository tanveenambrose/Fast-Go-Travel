"use client";

import { Calendar as CalendarIcon, Users } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function BookingBox() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState("2 adults, 0 children");

  return (
    <div className="rounded-xl py-10 px-7 w-full shadow-lg">
      {/* Date Inputs */}
      <div className="grid grid-cols-2 gap-3">
        {/* Check-in */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-400 mb-1">Check-in</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal  border-gray-700"
              >
                <CalendarIcon className="mr-2 h-4 w-4 " />
                {checkIn ? (
                  format(checkIn, "PPP")
                ) : (
                  <span className="">Select date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0  border-gray-700">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check-out */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-400 mb-1">Check-out</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal  border-gray-700"
              >
                <CalendarIcon className="mr-2 h-4 w-4 " />
                {checkOut ? format(checkOut, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 border-gray-700">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Guests */}
      <div className="flex flex-col mt-4">
        <label className="text-sm text-gray-400 mb-1">Guests</label>
        <Select onValueChange={setGuests} defaultValue={guests}>
          <SelectTrigger className="w-full  border-gray-700 ">
            <Users className="w-4 h-4 text-gray-400 mr-2" />
            <SelectValue placeholder="Select guests" />
          </SelectTrigger>
          <SelectContent className=" border-gray-700 ">
            <SelectItem value="1 adult">1 adult</SelectItem>
            <SelectItem value="2 adults, 0 children">
              2 adults, 0 children
            </SelectItem>
            <SelectItem value="2 adults, 1 child">2 adults, 1 child</SelectItem>
            <SelectItem value="2 adults, 2 children">
              2 adults, 2 children
            </SelectItem>
            <SelectItem value="Family (4+)">Family (4+)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Price breakdown */}
      <div className="flex justify-between text-gray-400 text-sm mb-2">
        <span>Room rate</span>
        <span>৳5,000</span>
      </div>
      <div className="flex justify-between text-gray-400 text-sm">
        <span>Taxes & fees</span>
        <span>৳500</span>
      </div>
      <div className="flex justify-between font-bold text-lg mt-2">
        <span>Total</span>
        <span>৳5,500</span>
      </div>

      {/* Reserve button */}
      <Link href="/payment/details">
        <button className="w-full mt-5 py-3 bg-gradient-to-r from-[#0A60F9] to-[#B004FE] hover:from-purple-600 hover:to-purple-700 transition-colors duration-300 rounded-full font-semibold text-white cursor-pointer">
          Reserve Now
        </button>
      </Link>

      {/* Notes */}
      <ul className="text-sm text-gray-400 mt-5 space-y-2">
        <li className="flex items-center gap-2">
          <span className="text-blue-400">✔</span>
          Free cancellation up to 24 hours before check-in
        </li>
        <li className="flex items-center gap-2">
          <span className="text-blue-400">✔</span>
          Pay later available
        </li>
      </ul>
    </div>
  );
}
