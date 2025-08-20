"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Robert Fox",
      role: "Google",
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?_gl=1*sgz58j*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU3MDE2NDQkbzUkZzEkdDE3NTU3MDE3NjYkajQ2JGwwJGgw", // replace with your images in /public
    },
    {
      name: "Robert Fox",
      role: "Google",
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?_gl=1*sgz58j*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU3MDE2NDQkbzUkZzEkdDE3NTU3MDE3NjYkajQ2JGwwJGgw",
    },
    {
      name: "Robert Fox",
      role: "Google",
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?_gl=1*sgz58j*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU3MDE2NDQkbzUkZzEkdDE3NTU3MDE3NjYkajQ2JGwwJGgw",
    },
    {
      name: "Robert Fox",
      role: "Google",
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?_gl=1*sgz58j*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU3MDE2NDQkbzUkZzEkdDE3NTU3MDE3NjYkajQ2JGwwJGgw",
    },
    {
      name: "Robert Fox",
      role: "Google",
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?_gl=1*sgz58j*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU3MDE2NDQkbzUkZzEkdDE3NTU3MDE3NjYkajQ2JGwwJGgw",
    },
  ];

  return (
    <section
      className=" bg-white py-40 my-20 bg-no-repeat bg-bottom bg-contain"
      style={{ backgroundImage: `url(/images/buildings.png)` }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Label */}
        <div className="flex items-center gap-2 mb-6 bg-[#055BC9] w-[181px] text-white py-3 px-4 rounded-4xl">
          <Image
            src="/images/testimonial_group.png"
            alt="user"
            width={52}
            height={32}
            className="rounded-full border-2 border-white"
          />

          <span className=" text-base font-medium">Testimonials</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 max-w-2xl">
          What our clients are saying about us?
        </h2>

        <Swiper
          spaceBetween={50}
          breakpoints={{
            640: { slidesPerView: 1 }, // screens >= 640px
            768: { slidesPerView: 2 }, // screens >= 768px
            1024: { slidesPerView: 3 }, // screens >= 1024px
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="py-5">
              <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between cursor-pointer">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    The best booking system
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-[40px] h-[40px] overflow-hidden rounded-full object-fit">
                      <Image src={t.avatar} alt={t.name} fill />
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {"★".repeat(t.rating)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
