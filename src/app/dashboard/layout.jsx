"use client";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.css";
import {
  FaCalendarAlt,
  FaUsers,
  FaTicketAlt,
  FaCog,
  FaSignOutAlt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";

const layout = ({ children }) => {
  return (
    <div className="relative">
      <img className="h-52 w-full absolute" src="/images/dashtop.png" alt="" />
      <div className=" flex flex-col md:flex-row min-h-screen gap-8 px-1 xl:px-26">
        {/* Sidebar */}
        <aside
          className="w-auto xl:w-96 bg-white shadow-md mt-4
     lg:mt-20 p-2 z-10 rounded"
        >
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-semibold text-[#161616] mb-1">
              Mr. Lorem Ipsum
            </h1>
            <p className=" text-[#161616]">Joined Since 2025</p>
          </div>

          <div className="p-4 space-y-2">
            {/* Account Information - Active */}
            <Link href="/dashboard/account">
              <div className="flex items-start p-4 rounded-lg cursor-pointer transition-colors bg-blue-50 border-l-4 border-blue-500">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
                  <RiProfileLine className="text-blue-600 text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-medium text-blue-700">
                    Account Information
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Manage your profile, bookings and more
                  </p>
                </div>
              </div>
            </Link>

            {/* Your Bookings */}
            <Link href="/dashboard/bookings">
              <div className="flex items-start p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
                  <FaCalendarAlt className="text-gray-600 text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-medium text-gray-900">
                    Your Bookings
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Check your latest/cancelled/pending booking
                  </p>
                </div>
              </div>
            </Link>

            {/* Co-Travelers */}
            <Link href="/dashboard/travelers">
              <div className="flex items-start p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
                  <FaUsers className="text-gray-600 text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-medium text-gray-900">
                    Co-Travelers
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Add or delete the respective traveler details
                  </p>
                </div>
              </div>
            </Link>

            {/* Promo Codes/Coupons */}
            <Link href="/dashboard/promocodes">
              <div className="flex items-start p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
                  <FaTicketAlt className="text-gray-600 text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-medium text-gray-900">
                    Promo Codes/ Coupons
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Check savings on your booking
                  </p>
                </div>
              </div>
            </Link>

            {/* Settings */}
            <Link href="/dashboard/settings">
              <div className="flex items-start p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
                  <FaCog className="text-gray-600 text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-medium text-gray-900">
                    Settings
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Manage Notification, Fare Alert and more
                  </p>
                </div>
              </div>
            </Link>

            {/* Log Out */}
            <div className="flex items-start p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3">
                <FaSignOutAlt className="text-gray-600 text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-medium text-gray-900">Log Out</h3>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-col flex-1">
          {/* common slider */}
          <div className="z-10 mt-6 lg:mt-20 relative">
            <Swiper
              navigation={{
                nextEl: ".nextBtn",
                prevEl: ".prevBtn",
              }}
              breakpoints={{
                319: { slidesPerView: 1 },
                480: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
                1440: { slidesPerView: 4 },
              }}
              mousewheel={true}
              keyboard={true}
              spaceBetween={10}
              modules={[Navigation, Mousewheel, Keyboard]}
              className="mySwiper max-w-6xl  relative "
            >
              {/* 1 */}
              <SwiperSlide className="">
                <img src="/images/item.png" alt="" />
              </SwiperSlide>

              {/* 2 */}
              <SwiperSlide className=" ">
                <img src="/images/item1.png" alt="" />
              </SwiperSlide>
              {/* 3 */}
              <SwiperSlide className=" ">
                <img src="/images/item2.png" alt="" />
              </SwiperSlide>
              {/* 3 */}
              <SwiperSlide className=" ">
                <img src="/images/item.png" alt="" />
              </SwiperSlide>
              {/* 3 */}
              <SwiperSlide className=" ">
                <img src="/images/item1.png" alt="" />
              </SwiperSlide>
            </Swiper>

            <div>
              <div className="relative z-20 flex gap-8 xl:gap-0 justify-center md:justify-between  xl:max-w-[1250px] mx-auto ">
                <div className=" md:-mt-20 ">
                  <button className="group  hover:bg-[#232F3F] prevBtn border border-[#232F3F]  p-2  rounded-full text-[#232F3F] ">
                    <FaArrowLeft className="group-hover:text-white" />
                  </button>
                </div>
                <div className="md:-mt-20 ">
                  <button className="group  hover:bg-[#232F3F] nextBtn border border-[#232F3F]  p-2  rounded-full text-[#232F3F]">
                    <FaArrowRight className="group-hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <main className="flex-1 mt-10 lg:mt-40 ">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default layout;
