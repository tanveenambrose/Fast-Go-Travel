"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import showToast from "@/utils/showToast";

const ReviewBusBooking = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6 mt-14">
      <h2 className="text-xl sm:text-4xl font-bold text-[#055BC9] mb-10">
        Review Your Booking
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Flight Details Card */}
        <Card className="rounded-2xl shadow-md border border-gray-200">
          <CardContent className="p-4 sm:px-6">
            {/* Route + Button */}
            <div className="flex items-center justify-between pb-4 border-b-[1px]">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800">
                DAC - DXB
              </h3>
              <div className="flex gap-5 items-center">
                <Button
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full px-4 py-1 text-sm cursor-pointer"
                  onClick={showToast}
                >
                  View Baggage
                </Button>
                <ChevronUp className="rounded-full bg-[#E9F4FF] p-1" />
              </div>
            </div>

            {/* Airline Info */}
            <div className="flex items-center gap-4 py-4 border-b-[1px]">
              <Image
                src="/images/soudia.png"
                alt="Biman Bangladesh Airlines"
                width={160}
                height={49}
                className="rounded-full"
              />
              <div>
                <p className="text-sm sm:text-base font-medium text-gray-800">
                  Soudia Coach Service
                </p>
                <p className="text-base sm:text-lg font-semibold">
                  1, Hino 1J Pluss, Non AC
                </p>
              </div>
            </div>

            {/* Flight Timings */}
            <div className="grid grid-cols-3 gap-6 text-sm sm:text-base pt-7">
              <div className="col-span-1 ">
                <p className="font-semibold text-gray-500">Depart</p>
                <p className="mt-1 font-semibold text-lg text-slate-950">
                  07:15 PM
                </p>
                <p className="text-gray-500">Sun, 11 July 2025</p>
                <p className="text-gray-600">Dhaka </p>
              </div>
              <div className="flex flex-col items-center justify-center col-span-1 ">
                <span className="text-gray-400 text-xs md:text-sm">
                  12 hour 0 minute
                </span>
                <Image
                  src="/images/arrow.png"
                  alt="arrow"
                  width={124}
                  height={0}
                  className="my-1"
                />
              </div>
              <div className="col-span-1 ml-auto">
                <p className="font-semibold text-gray-500">Arrive</p>
                <p className="mt-1 font-semibold text-lg text-slate-950">
                  07:15 AM
                </p>
                <p className="text-gray-500">Sun, 11 July 2025</p>
                <p className="text-gray-600">Cox's Bazar</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fare Summary Card */}
        <Card className="rounded-2xl shadow-md border border-gray-200">
          <CardContent className="p-2 sm:px-6">
            {/* Airline Title */}
            <div className="flex items-center gap-3 pb-3 border-b-[1px]">
              <Image
                src="/images/soudia.png"
                alt="Biman Bangladesh Airlines"
                width={160}
                height={49}
                className="rounded-full"
              />
              <h3 className="text-sm sm:text-2xl font-bold text-gray-800">
                Soudia Coach Service
              </h3>
            </div>

            {/* Fare Summary */}
            <div className="space-y-3 text-sm sm:text-base py-3">
              <h1 className="font-bold text-base md:text-lg">Fare Summary</h1>
              <div className="flex justify-between">
                <span>Adult (1 traveler)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base text-slate-500 font-medium">
                  Base Fare
                </span>
                <span className="font-bold text-lg md:text-xl">33,000 BDT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base text-slate-500 font-medium">
                  Taxes + Fees
                </span>
                <span className="font-bold text-lg md:text-xl">6,500 BDT</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3">
                <span className="font-semibold text-slate-400">Sub Total</span>
                <span className="font-bold text-lg md:text-xl">39,500 BDT</span>
              </div>
              <div className="flex justify-between">
                <h3>
                  <span className="font-bold text-base md:text-lg">
                    You Pay{" "}
                  </span>
                  <span className="text-slate-400 text-base md:text-lg">
                    (For 1 Traveler)
                  </span>
                </h3>
                <span className="font-bold text-lg md:text-xl">39,500 BDT</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReviewBusBooking;
