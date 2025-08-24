"use client";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Banknote, Calendar1, FileType, MapPin, Search } from "lucide-react";
import showToast from "@/utils/showToast";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-10 py-16 lg:flex-row bg-slate-50 px-7 lg:px-14">
      <div className="w-full lg:w-1/2 lg:-mt-16">
        <span className="text-base lg:text-lg text-[#0552B5] bg-[#FFFFFF] px-5 py-3 rounded-xl font-semibold">
          Book With Us!
        </span>
        <h1 className="text-3xl font-bold leading-tight lg:text-7xl mt-7 lg:mt-10">
          Find And Book <br /> A Great{" "}
          <span className="text-blue-700 ">Experience</span>
        </h1>
        <p className="mt-10 text-sm leading-relaxed lg:text-base">
          Embark on a delightful vacation with FastGo, where every moment is
          infused with joy and relaxation. Explore new horizons, indulge in
          leisure, and create lasting memories with the perfect getaway
          companion.
        </p>
      </div>
      <div className="w-full lg:w-1/2 h-[400px] md:h-[762px] relative">
        <Image src="/images/hero_image.png" alt="beach" fill />
      </div>

      <div className="absolute hidden bg-white rounded-lg lg:block bottom-1/8 left-1/12">
        <ToggleGroup variant="outline" type="multiple">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="flex flex-col py-12 px-14"
          >
            <p className="flex items-center gap-2 text-lg leading-7">
              <MapPin color="blue" />
              Location
            </p>
            <p>Where To Next?</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="flex flex-col py-12 px-14"
          >
            <p className="flex items-center gap-2 text-lg leading-7">
              <FileType color="blue" />
              Type
            </p>
            <p>Select Trip Type</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="flex flex-col py-12 px-14"
          >
            <p className="flex items-center gap-2 text-lg leading-7">
              <Calendar1 color="blue" />
              Duration
            </p>
            <p>Select trip duration</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="flex flex-col py-12 px-14"
          >
            <p className="flex items-center gap-2 text-lg leading-7">
              <Banknote color="blue" size={20} />
              Price
            </p>
            <p>Select trip budget</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="py-12 px-3 bg-gradient-to-r from-[#0A60F9] to-[#B004FE]"
            onClick={showToast}
          >
            <Search color="white" size={64} />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </section>
  );
}
