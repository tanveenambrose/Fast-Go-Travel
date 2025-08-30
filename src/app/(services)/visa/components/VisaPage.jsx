"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const VisaCard = ({ travelers = 1, price = 6000, image }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-2xl shadow-md overflow-hidden mb-6 bg-white  transition-transform transform hover:scale-[1.01] duration-300">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-4 p-4">
        {/* Illustration */}
        <div className="flex-shrink-0 md:w-1/6 w-full relative aspect-[4/3]">
          <Image
            src={image}
            alt="Visa Illustration"
            fill
            className="object-contain"
          />
        </div>

        {/* Visa Info */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-semibold">
            Electronic visa (Adult)
          </h2>
          <p className="flex items-center text-sm font-semibold text-gray-600 my-2">
            <CheckCircle className="text-green-600 w-4 h-4 mr-1" />
            Visa issuance rights reserved by the embassy.
          </p>
          <p>
            <span className="font-medium">Processing Type: </span>Normal
          </p>
          <div className="flex flex-col md:flex-row gap-x-20 gap-y-2 mt-3 text-sm text-gray-700">
            <div>
              <p className="mb-2">
                <span className="font-medium">Visa Mode: </span>Electronic visa
              </p>
              <p>
                <span className="font-medium">Visa Type: </span>Tourist
              </p>
            </div>
            <div>
              <p className="mb-2">
                <span className="font-medium">Max Validity: </span>90 Days
              </p>
              <p>
                <span className="font-medium">Maximum Stays: </span>30 Days
              </p>
            </div>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex flex-col items-start md:items-end justify-between">
          <p className="text-sm text-gray-500">
            ({travelers} {travelers > 1 ? "travelers" : "traveler"})
          </p>
          <p className="md:text-right">
            <span className="block text-sm text-gray-500">Total Price</span>
            <span className="text-xl font-bold">{price} BDT</span>
          </p>
          <Button
            variant="blue"
            onClick={() => setOpen(!open)}
            className="mt-2 w-full"
          >
            {open ? (
              <span className="flex items-center">
                View Details <ChevronUp className="ml-1 w-4 h-4" />
              </span>
            ) : (
              <span className="flex items-center">
                View Details <ChevronDown className="ml-1 w-4 h-4" />
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Remarks Section */}
      {open && (
        <div className="border-t bg-gray-50 p-5 text-sm text-gray-700 leading-relaxed">
          <h3 className="font-semibold text-blue-600 mb-2">Remarks</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              FEBD provides only consultancy services and doesn’t provide any
              guarantee for visas. Embassy is only authorized to approve Visas.
            </li>
            <li>
              File processing for visas will start only after receiving all
              necessary documents.
            </li>
            <li>
              Processing time, requirements, and fees are subject to change by
              the Embassy without any prior notice.
            </li>
            <li>
              The Embassy reserves the right to ask for any additional documents
              with the above-mentioned checklist.
            </li>
            <li>
              All Bengali documents must be translated into English and
              notarized.
            </li>
            <li>All visa fees are non-refundable after submission.</li>
            <li>Our service charges are non-refundable.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default function VisaPage() {
  return (
    <div className="flex flex-col mb-26">
      <div className=" w-full mx-auto p-4 flex-1">
        {/* Pass different images here */}
        <VisaCard
          travelers={1}
          price={6000}
          image="/images/visa_illustration.svg"
        />
        <VisaCard
          travelers={3}
          price={18000}
          image="/images/illustration.svg"
        />
      </div>

      <div>
        <Link href="/visa/book">
          <button className="w-full bg-gradient-to-r from-[#0A60F9] to-[#B004FE] p-4 text-white font-semibold text-lg rounded-4xl cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-colors duration-300">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
