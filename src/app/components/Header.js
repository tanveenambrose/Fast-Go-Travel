"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Flight", href: "/flight" },
    { name: "Hotel", href: "/hotel" },
    { name: "Holiday", href: "/holiday" },
    { name: "Umrah", href: "/umrah" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md shadow-gray-300">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex">
              <Image
                src="/images/nav_logo.png"
                alt="logo"
                width={130}
                height={53}
              />
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex p-1 text-black transition-all duration-200 border border-black md:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:justify-center md:space-x-5 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-semibold transition-all duration-200 hover:text-opacity-80 ${
                    isActive ? "text-blue-500" : "text-black"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu */}
          <div
            className={`fixed top-0 left-0 h-screen w-screen bg-white z-40 p-10 transform transition-transform duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Close button */}
            <div className="flex">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="inline-flex p-1 ml-auto text-black transition-all duration-200 border border-black md:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile nav links */}
            <div className="grid grid-cols-4 gap-2 my-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold transition-all duration-200 hover:text-opacity-80 p-2 rounded-md shadow-gray-300 shadow-lg flex items-center justify-center ${
                      isActive ? "text-blue-300" : "text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="h-[2px] bg-gray-300 mb-5" />

            {/* Mobile login/support buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center p-2 text-base font-semibold transition-all duration-200 rounded-md shadow-lg hover:text-opacity-80 shadow-gray-300 text-slate-950"
              >
                Login
              </Link>
              <Link
                href="/support"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center p-2 text-base font-semibold transition-all duration-200 rounded-md shadow-lg hover:text-opacity-80 shadow-gray-300 text-slate-950"
              >
                Support
              </Link>
            </div>
          </div>

          {/* Desktop login button */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 px-5 py-2 font-bold text-white bg-teal-500 rounded-lg cursor-pointer"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
