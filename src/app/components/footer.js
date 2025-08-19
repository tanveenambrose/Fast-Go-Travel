import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  const utilityPages = [
    "Contact us",
    "404 not found",
    "Password protected",
    "Travel Insurance",
    "Change log",
  ];

  const paymentIcons = [
    "/images/payments/visa.png",
    "/images/payments/mastercard.png",
    "/images/payments/amex.png",
    "/images/payments/dbbl.png",
    "/images/payments/mycash.png",
    "/images/payments/rocket.png",
    "/images/payments/bankasia.png",
    "/images/payments/upi.png",
    "/images/payments/nagad.png",
    "/images/payments/bkash.png",
    "/images/payments/payoneer.png",
    "/images/payments/fastcash.png",
    "/images/payments/other.png",
  ];

  return (
    <footer className="bg-[#0B183A] text-white pt-10 md:pt-12 lg:pt-16 pb-8 rounded-t-xl">
      <div className="container mx-auto px-5 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-12 lg:gap-20">
        {/* Left Section: Logo + Description + Newsletter */}
        <div className="col-span-1">
          <div className="relative w-40 sm:w-56 md:w-64 lg:w-72 h-16 sm:h-20 md:h-24 lg:h-28">
            <Image
              src="/images/footer_logo.png"
              alt="FastGo Travel"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Discover how you can offset your adventure&apos;s carbon emissions
            and support the sustainable initiatives practiced by our operato
            Discover sustainable initiatives practiced by worldwide.
          </p>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-2 py-2 sm:px-3 sm:py-2 rounded-l-md text-black outline-none bg-white text-sm sm:text-base"
            />
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-2 py-1 sm:px-4 sm:py-2 rounded-r-md font-semibold text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Section: Utility Pages */}
        <div className="col-span-1 md:flex justify-center">
          <div>
            <h3 className="font-semibold mb-3 md:mb-6 text-lg md:text-2xl">
              Utility pages
            </h3>
            <ul className="space-y-2 text-gray-300">
              {utilityPages.map((page) => (
                <li
                  key={page}
                  className="hover:text-white cursor-pointer text-base md:text-lg"
                >
                  {page}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Payment Icons */}
        <div className="col-span-1 md:flex justify-center">
          <div>
            <h3 className="font-semibold mb-3 md:mb-6 text-xl md:text-2xl">
              We Accept
            </h3>
            <div className="-ml-4">
              <Image
                src="/images/group_payment_methods.png"
                alt="payment methods"
                width={320}
                height={193}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-4 px-5 md:px-16 flex flex-col md:flex-row justify-between items-center text-gray-400 text-base">
        <p>Copyright © FastGo | Designed by</p>
        <p className="mt-2 md:mt-0">FastGo — Powered by FastGo</p>
        <div className="flex gap-3 mt-2 md:mt-0">
          <Link
            href="#"
            className="border-[1px] w-7 h-7 p-1 rounded-full flex items-center justify-center hover:bg-white"
          >
            <Facebook />
          </Link>
          <Link
            href="#"
            className="border-[1px] w-7 h-7 p-1 rounded-full flex items-center justify-center hover:bg-white"
          >
            <Twitter />
          </Link>
          <Link
            href="#"
            className="border-[1px] w-7 h-7 p-1 rounded-full flex items-center justify-center hover:bg-white"
          >
            <Instagram />
          </Link>
          <Link
            href="#"
            className="border-[1px] w-7 h-7 p-1 rounded-full flex items-center justify-center hover:bg-white"
          >
            <FaPinterest />
          </Link>
        </div>
      </div>
    </footer>
  );
}
