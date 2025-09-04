"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Pagination from "../../components/Pagination";
import Link from "next/link";

export default function TourPackages() {
  const packages = Array(6).fill({
    title: "Grand Wonders Of Europe.",
    nights: "14 Nights | Group Departure",
    details:
      "2N London | 3N Paris | 1N Netherlands | 1N Germany | 3N London | 3N Paris | 1N",
    highlights: ["Disneyland® Paris", "Keukenhof Gardens", "Tour Manager"],
    price: "৳ 2,98,760",
    image: "/images/tour.svg", // Replace with actual image
  });

  return (
    <div className="flex-1 mb-10">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          "All Packages",
          "Top Selling",
          "Package with Tour Manager",
          "All-Inclusive Package",
        ].map((tab, i) => (
          <Button
            key={i}
            variant={i === 1 ? "default" : "outline"}
            className={`rounded-full px-4 ${
              i === 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {packages.map((pkg, idx) => (
          <Card
            key={idx}
            className="shadow-md rounded-2xl overflow-hidden px-2 py-2 transition-transform transform hover:scale-[1.01] duration-300"
          >
            <div className="w-full aspect-[4/3] relative rounded-md overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <p className="text-xs text-blue-600 font-medium mb-1">
                {pkg.nights}
              </p>
              <h3 className="font-semibold text-lg">{pkg.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{pkg.details}</p>

              <ul className="flex flex-wrap gap-2 text-xs text-gray-700 mt-2">
                {pkg.highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-1">
                    ✅ {item}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-400 mt-3">Starting From</p>
              <p className="font-semibold text-lg text-gray-800">{pkg.price}</p>

              <Link href="/tour/packages">
                <Button className="w-full mt-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white  text-lg py-6 hover:from-purple-600 hover:to-purple-700 transition-colors duration-300 cursor-pointer">
                  View Package →
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <Pagination />
    </div>
  );
}
