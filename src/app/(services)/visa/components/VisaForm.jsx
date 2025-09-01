"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import FileUpload from "./FileUpload";
import Link from "next/link";

// DatePicker Component (reusable)
function DatePickerField({ label, placeholder }) {
  const [date, setDate] = useState();

  return (
    <div>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="input"
            className="w-full justify-start text-left font-normal"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function VisaForm() {
  return (
    <div className="w-full px-5 md:px-0">
      {/* Traveler + Visa */}
      <h1 className="text-lg md:text-2xl font-semibold mb-5">
        Traveler 1 (Adult) Primary contact
      </h1>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1">
            Assign Visa Type
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select visa type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tourist">Tourist</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            No. of Visa
          </label>
          <Input type="number" min={1} defaultValue={1} placeholder="1" />
        </div>
      </div>

      {/* Personal Details */}
      <h3 className="text-xl md:text-3xl font-semibold mb-5">
        Personal Details:
      </h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1">First Name</label>
          <Input placeholder="Enter first name" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Last Name</label>
          <Input placeholder="Enter last name" />
        </div>
        <DatePickerField
          label="Date of Birth"
          placeholder="Select date of birth"
        />
        <div>
          <label className="block text-sm font-semibold mb-1">
            Passport Number
          </label>
          <Input placeholder="AS00000000" />
        </div>
        <DatePickerField
          label="Passport Expiry Date"
          placeholder="Select expiry date"
        />
        <div>
          <label className="block text-sm font-semibold mb-1">Country</label>
          <Input placeholder="Enter country" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">City</label>
          <Input placeholder="Enter city" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Address</label>
          <Input placeholder="Enter address" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">
            Passport Type
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select passport type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ordinary">Ordinary</SelectItem>
              <SelectItem value="diplomatic">Diplomatic</SelectItem>
              <SelectItem value="official">Official</SelectItem>
              <SelectItem value="service">Service</SelectItem>
              <SelectItem value="special">Special</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="border-[1px] my-4"></div>
      {/* Contact Details */}
      <h3 className="text-md md:text-xl font-semibold mb-2">
        Contact Details:
      </h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1">
            Phone Number
          </label>
          <Input placeholder="+880 123456789" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">
            Email Address
          </label>
          <Input type="email" placeholder="example@email.com" />
        </div>
      </div>
      <div className="border-[1px] my-4"></div>
      {/* Required Documents */}
      <h3 className="text-lg md:text-3xl font-semibold mb-3">
        Required Documents:
      </h3>
      <p className="text-sm md:text-lg font-semibold text-gray-500 mb-3">
        Soft Copy Documents
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <FileUpload label="Current passport bio page " />
        <FileUpload label="Previous passport (if any)" />
        <FileUpload label="National ID / Birth Certificate" />
        <FileUpload label="Recent Passport Size Photograph" />
        <FileUpload label="Bank Statement (last 6 months)" />
        <FileUpload label="Travel Itinerary / Flight Booking" />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center mt-7">
        <Button variant="outline" className="rounded-full py-6 text-lg">
          <Link href="/visa" className="px-20 md:px-6">
            ← Back
          </Link>
        </Button>
        <Button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white  text-lg py-6 hover:from-purple-600 hover:to-purple-700 transition-colors duration-300">
          <Link href="/payment" className="px-20 ">
            Continue
          </Link>
        </Button>
      </div>
    </div>
  );
}
