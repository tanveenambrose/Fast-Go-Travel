"use client";

import Image from "next/image";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import showToast from "@/utils/showToast";

export default function StepsSection() {
  return (
    <section className="w-full pb-16">
      <div className="max-w-[1440px] mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-14">
          All you have to do
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            {
              id: 1,
              text: "Sign in or sign up for an FastGo account",
            },
            {
              id: 2,
              text: "Upload your property details and photos",
            },
            {
              id: 3,
              text: "Set your prices and available dates",
            },
            {
              id: 4,
              text: "See your property go live in front of millions of travelers within 30 mins",
            },
          ].map((step) => (
            <div
              key={step.id}
              className="rounded-xl border border-[#B2CCEE] hover:bg-[#B2CCEE] cursor-pointer hover:text-white p-6 text-left transition-all duration-150 hover:shadow-md shadow-md "
            >
              <div className="flex items-center justify-start mb-3">
                <span className="h-8 w-8 flex items-center justify-center rounded-full border  text-sm font-medium">
                  {step.id}
                </span>
              </div>
              <p className=" text-sm md:text-base leading-relaxed pr-5">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-10">
          <span className="text-gray-500 text-2xl font-medium">Or</span>
        </div>

        {/* Fast-track Import Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 md:flex md:items-center md:justify-between shadow-md">
          {/* Left Content */}
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 mb-3 ">
              <Button
                variant="blue"
                className="cursor-pointer rounded-4xl"
                onClick={showToast}
              >
                <Zap className="h-4 w-4  inline-block" />
                Fast-track import
              </Button>
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 leading-relaxed my-4">
              Already listed your property on other platforms?
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              You can fast-track the process by importing your property to Agoda
              in just a few clicks.
            </p>
            <button
              className="mt-2 text-blue-600 font-medium text-sm hover:underline"
              onClick={showToast}
            >
              Learn more
            </button>
          </div>

          {/* Right Illustration */}
          <div className="mt-6 md:mt-0 w-full aspect-[4/3] md:w-[180px] md:h-[140px] md:ml-6 relative">
            <Image
              src="/images/fast_track.svg" // 🔹 replace with your image path
              alt="Fast-track illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
