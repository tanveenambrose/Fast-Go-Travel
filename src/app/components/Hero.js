"use client";
import Image from "next/image";
import SearchBar from "./SearchBar";
import showToast from "@/utils/showToast";

export default function Hero() {
  return (
    <section className="bg-[#FBFBFC] relative">
      <div className="relative flex flex-col items-center gap-10 py-16 lg:flex-row  px-7 lg:px-10 max-w-[1440px] mx-auto">
        <div className="w-full lg:w-1/2 lg:-mt-16">
          <span className="text-base lg:text-lg text-[#0552B5] bg-[#FFFFFF] px-5 shadow-md shadow-[rgba(10, 10, 10, 0.05)] py-3 rounded-4xl font-semibold">
            Book With Us!
          </span>
          <h1 className="text-3xl font-bold leading-tight lg:text-7xl mt-7 lg:mt-10">
            Find And Book <br /> A Great{" "}
            <span className="text-[#055BC9] italic">Experience</span>
          </h1>
          <p className="mt-10 text-sm leading-relaxed lg:text-base">
            Embark on a delightful vacation with FastGo, where every moment is
            infused with joy and relaxation. Explore new horizons, indulge in
            leisure, and create lasting memories with the perfect getaway
            companion.
          </p>
        </div>  
        <div className="w-full lg:w-1/2 h-[400px] md:h-[762px] relative z-10">
          <Image src="/images/hero_image.png" alt="beach" fill />
        </div>

        <div
          className="absolute hidden  lg:block bottom-1/6 z-15 ml-0"
          onClick={showToast}
        >
          <SearchBar />
        </div>
      </div>
      <div className="hidden lg:block absolute  z-1 -bottom-10 w-full h-[315px]">
        <Image src="/images/hero_bottom.png" alt="hero" fill />
      </div>
    </section>
  );
}
