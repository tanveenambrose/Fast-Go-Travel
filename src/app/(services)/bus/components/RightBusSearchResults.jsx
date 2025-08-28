"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import showToast from "@/utils/showToast";
import SortBar from "../../components/SortBar";
import Link from "next/link";
import Pagination from "../../components/Pagination";

const flights = Array(5).fill({
  airline: "Biman Bangladesh Airlines",
  logo: "/images/bus_logo.png",
  code: "BD-347",
  depart: "07:15 PM",
  arrive: "07:15 AM",
  duration: "12 hour 0 minute",
  price: "1,200 BDT",
  date: "Sun, 1 July 2025",
  from: "Dhaka ",
  to: "Cox's Bazar",
  baggage: "35 kg (s)",
  cabin: "7 kg (s)",
  terminalFrom: "Terminal 1",
  terminalTo: "Terminal 2",
});

const RightBusSearchResults = () => {
  return (
    <div className="space-y-6 mb-20">
      {/* Results header */}
      <SortBar />

      {/* Flight cards */}
      {flights.map((f, i) => (
        <Card
          key={i}
          className="shadow-md border rounded-xl overflow-hidden transition-transform transform hover:scale-[1.01] duration-300"
        >
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4">
            {/* Airline Info */}
            <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
              <Image
                src={f.logo}
                alt={f.airline}
                width={202}
                height={90}
                className="object-contain"
              />
            </div>

            {/* Flight Info */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 w-full md:mr-4 lg:pr-24">
              <div className="flex flex-col items-center md:items-start md:ml-auto sm:text-center ">
                <p className="text-sm text-gray-500 text-left">Depart</p>
                <p className="font-bold text-lg">{f.depart}</p>
                <p>{f.date}</p>
                <p>{f.from}</p>
              </div>
              <div className="flex flex-col items-center md:items-center md:ml-auto justify-center">
                <span className="text-gray-500">{f.duration}</span>
                <Image
                  src="/images/arrow.png"
                  alt="arrow"
                  width={124}
                  height={20}
                  className="my-1"
                />
              </div>
              <div className="flex flex-col items-center md:items-start md:ml-auto text-left sm:text-center">
                <p className="text-sm text-gray-500">Arrive</p>
                <p className="font-bold text-lg">{f.arrive}</p>
                <p>{f.date}</p>
                <p>{f.to}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row md:flex-col items-stretch md:items-end gap-2 mt-3 md:mt-0 w-full sm:w-auto">
              <Button className="bg-gradient-to-r from-[#0A60F9] to-[#B004FE] text-white font-semibold rounded-lg px-5 py-2 w-full sm:w-auto hover:from-purple-600 hover:to-purple-700 transition-colors duration-300">
                <Link href="/bus/details">Book Now</Link>
              </Button>
              <div className="flex flex-col items-center md:items-end md:ml-auto text-left sm:text-center">
                <p className="text-sm text-gray-900">
                  <span className="font-bold">21 Seat</span> (s) Available
                </p>
                <p className="font-bold text-lg mt-1">{f.price}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default RightBusSearchResults;
