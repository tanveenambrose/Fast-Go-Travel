"use client";
import showToast from "@/utils/showToast";
import Image from "next/image";

export default function WhoAreWe() {
  return (
    <section
      className="relative bg-cover bg-center bg-[#E9F4FF] py-10 lg:py-16 my-10"
      style={{ backgroundImage: `url(/images/who_are_we_bg.png)` }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-20">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <p className="text-blue-600 font-semibold flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
            Who we are
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Best Immigration & Visa Consultation
          </h1>
          <p className="text-gray-500">
            Your trusted partner for seamless immigration and visa solutions.
            Expert guidance, personalized service, and a commitment to making
            your journey smooth and successful.
          </p>

          {/* Features */}
          <div className="flex gap-8 my-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                ✈️
              </div>
              <span className="font-medium">Expertise in visa processing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                🏢
              </div>
              <span className="font-medium">Fastest working process</span>
            </div>
          </div>

          {/* Button */}
          <button
            className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#0A60F9] to-[#B004FE] flex items-center gap-2 w-fit"
            onClick={showToast}
          >
            View More →
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 lg:mt-0">
          <Image
            src="/images/who_are_we.png" // replace with actual image path
            alt="Immigration Consultation"
            width={721}
            height={672}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
