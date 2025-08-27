"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import showToast from "@/utils/showToast";
import Link from "next/link";
import SortBar from "../../components/SortBar";
import Pagination from "../../components/Pagination";

const flights = Array(5).fill({
  airline: "Biman Bangladesh Airlines",
  logo: "/images/bd_biman.png",
  code: "BD-347",
  depart: "15:00",
  arrive: "17:00",
  duration: "3 hour 0 minute",
  price: "33,000 BDT",
  date: "Sun, 1 July 2025",
  from: "Dhaka (DAC)",
  to: "Dubai (DXB)",
  baggage: "35 kg (s)",
  cabin: "7 kg (s)",
  terminalFrom: "Terminal 1",
  terminalTo: "Terminal 2",
});

const RightFlightResults = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="space-y-6 mb-20">
      {/* Results header */}
      <SortBar />

      {/* Flight cards */}
      {flights.map((f, i) => (
        <Card key={i} className="shadow-md border rounded-xl overflow-hidden">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4">
            {/* Airline Info */}
            <div className="flex flex-col items-start gap-3 w-full md:w-auto">
              <Image
                src={f.logo}
                alt={f.airline}
                width={205}
                height={67}
                className="object-contain"
              />
              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  {f.airline}
                </h3>
                <p className="text-sm text-green-600 font-medium mt-1">
                  Partially Refundable
                </p>
              </div>
            </div>

            {/* Flight Info */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 w-full md:mr-4">
              <div className="flex flex-col items-start md:ml-auto sm:text-center ">
                <p className="text-sm text-gray-500 text-left">Depart</p>
                <p className="font-bold text-lg">{f.depart}</p>
                <p>{f.date}</p>
                <p>{f.from}</p>
              </div>
              <div className="flex flex-col items-center md:ml-auto justify-center">
                <span className="text-gray-500">{f.duration}</span>
                <Image
                  src="/images/arrow.png"
                  alt="arrow"
                  width={100}
                  height={20}
                  className="my-1"
                />
                <span className="text-xs text-gray-400">Non Stop</span>
              </div>
              <div className="flex flex-col items-start md:ml-auto text-left sm:text-center">
                <p className="text-sm text-gray-500">Arrive</p>
                <p className="font-bold text-lg">{f.arrive}</p>
                <p>{f.date}</p>
                <p>{f.to}</p>
              </div>
              <div className="flex flex-col items-start md:ml-auto text-left sm:text-center">
                <p className="text-sm text-gray-500">Price</p>
                <p className="font-bold text-lg mt-1">{f.price}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row md:flex-col items-stretch md:items-end gap-2 mt-3 md:mt-0 w-full sm:w-auto">
              <Button className="bg-gradient-to-r from-[#0A60F9] to-[#B004FE] text-white font-semibold rounded-lg  py-2 w-full sm:w-auto">
                <Link href="/flight/details" className="px-5">
                  Book Now
                </Link>
              </Button>
              <div
                className="text-blue-600 text-sm font-medium cursor-pointer flex items-center justify-center gap-1 w-full sm:w-auto lg:mt-10 mt-5"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                Flight Details{" "}
                {expanded === i ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
          </div>

          {/* Expanded Section */}
          {expanded === i && (
            <div className="border-t p-4 space-y-4 bg-white md:px-10">
              {/* Tabs */}
              <div className="flex flex-wrap gap-3">
                <Button variant="blue" size="sm">
                  <Link href="/flight/details">Flight Details</Link>
                </Button>
                <Button variant="blue" size="sm" onClick={showToast}>
                  Fare Summary
                </Button>
                <Button variant="blue" size="sm" onClick={showToast}>
                  Fare Rules
                </Button>
              </div>

              {/* Details */}
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src="/images/biman_logo.png"
                  alt="airline"
                  width={74}
                  height={74}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold md:text-2xl">
                    {f.airline} {f.code}
                  </h4>
                  <p className="text-sm text-gray-600 font-semibold">
                    Aircraft: Boeing 787-4
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Operated by: BG
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Available Seats: 92
                  </p>
                </div>
              </div>

              {/* Timing Info */}
              <div className="grid grid-cols-2 sm:grid-cols-6 items-baseline text-sm text-gray-700 gap-4 text-center sm:text-left mt-7">
                <div>
                  <p className="font-bold text-base">{f.depart}</p>
                  <p>{f.terminalFrom}</p>
                  <p>{f.from}</p>
                </div>
                <div className="flex flex-col items-center justify-center -ml-16">
                  <span className="text-gray-500">{f.duration}</span>
                  <Image
                    src="/images/arrow.png"
                    alt="arrow"
                    width={100}
                    height={20}
                    className="my-1"
                  />
                  <span className="text-xs text-gray-400">Non Stop</span>
                </div>
                <div>
                  <p className="font-bold text-base">{f.arrive}</p>
                  <p>{f.terminalTo}</p>
                  <p>{f.to}</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-base">Baggage</p>
                  <p>{f.baggage}</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-base">Check In</p>
                  <p>{f.baggage}</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-base">Cabin</p>
                  <p>{f.cabin}</p>
                </div>
              </div>
            </div>
          )}
        </Card>
      ))}

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default RightFlightResults;
