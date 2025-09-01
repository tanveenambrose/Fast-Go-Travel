"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function TravelerDetails() {
  return (
    <section className="w-full mx-auto p-6 bg-white space-y-6 my-20">
      {/* Header */}
      <h2 className="text-xl font-bold md:text-4xl text-[#055BC9]">
        Traveler Details
      </h2>

      <div className="py-4 border rounded-xl shadow-sm px-6">
        {/* Traveler Info */}
        <div className="space-y-6 border-b-2">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-700 font-medium md:text-2xl text-lg">
              Traveler 1 (Adult) Primary contact
            </h3>
            <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <h5 className="text-gray-600 mb-3 text-base font-semibold">
              Gender
            </h5>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Male</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Female</Label>
              </div>
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="mb-2 text-base md:text-lg font-semibold">
                First Name
              </Label>
              <Input placeholder="First Name" />
            </div>
            <div>
              <Label className="mb-2 text-base md:text-lg font-semibold">
                Last Name
              </Label>
              <Input placeholder="Last Name" />
            </div>
          </div>

          {/* Middle Name + DOB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="mb-2 text-base md:text-lg font-semibold">
                Middle Name
              </Label>
              <Input placeholder="Middle Name" />
            </div>
            <div>
              <Label className="mb-2 text-base md:text-lg font-semibold">
                Date of Birth
              </Label>
              <Input placeholder="DD/MM/YYYY" />
            </div>
          </div>

          {/* Passport + Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
            <div>
              <Label className="mb-2 text-base md:text-lg font-semibold">
                Passport Expiry Date
              </Label>
              <Input placeholder="DD/MM/YYYY" />
            </div>
            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-base md:text-lg font-semibold"
              >
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  defaultValue=""
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="bd">Bangladesh</option>
                  <option value="us">USA</option>
                  <option value="uk">UK</option>
                </select>

                {/* arrow (aligned with text-center vertically) */}
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="p-2 md:p-5 space-y-6">
          <h3 className="text-gray-700 font-medium md:text-2xl text-lg">
            Contact Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="mb-2 text-base md:text-lg font-semibold">
                Phone Number
              </Label>
              <Input placeholder="+880 123 456789" />
            </div>
            <div>
              <Label className="mb-2 text-base md:text-lg font-semibold">
                Email Address
              </Label>
              <Input placeholder="info@gmail.com" />
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="flex flex-row items-start md:items-center gap-2 shadow-md px-1 md:px-5 py-5 rounded-lg mt-12">
        <Checkbox />
        <p className="text-gray-600 text-xs md:text-sm">
          I agree to the{" "}
          <span className="text-[#055BC9] cursor-pointer">
            Terms & Conditions{" "}
          </span>
          and{" "}
          <span className="text-[#055BC9] cursor-pointer">Privacy Policy</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center mt-7">
        <Button variant="outline" className="rounded-full  py-6 text-lg">
          <Link href="/flight" className="px-20 md:px-6">
            ← Back
          </Link>
        </Button>
        <Button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white  text-lg py-6 hover:from-purple-600 hover:to-purple-700 transition-colors duration-300">
          <Link href="/payment" className="px-20 py-6">
            Continue
          </Link>
        </Button>
      </div>
    </section>
  );
}
