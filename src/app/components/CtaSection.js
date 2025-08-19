import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function CtaSection() {
  return (
    <section className="relative bg-blue-600 rounded-xl overflow-hidden  px-3 sm:px-12 md:px-20 text-white flex flex-row items-center justify-between py-28 mt-10 mb-20 max-w-7xl mx-auto">
      {/* Phone images */}
      <div className="lg:w-1/2"></div>
      <div className="hidden lg:flex lg:absolute bottom-0 left-1/6">
        <Image
          src="/images/mobile_group.png"
          alt="mobile"
          width={500}
          height={700}
        />
      </div>
      <div className="relative w-[100px] h-[100px] lg:w-[166px] lg:h-[166px]">
        <Image src="/images/swigly_arrow.png" alt="arrow" fill />
      </div>

      {/* Text content */}
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex">
        <div>
          <p className="text-sm uppercase tracking-wide opacity-70 mb-2">
            Ready to get started?
          </p>
          <h2 className="text-3xl lg:text-6xl font-bold mb-6">
            Get Started with FastGo Today
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex items-center border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-blue-600 transition ">
              <FaApple />
              <span className="ml-2 text-sm font-semibold">
                Get it on App Store
              </span>
            </button>
            <button className="flex items-center border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-blue-600 transition ">
              <FaGooglePlay />
              <span className="ml-2 text-sm font-semibold">
                Get it on Google Play
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
