"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Categories() {
  const categories = [
    {
      image:
        "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?_gl=1*12h4stq*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MjExMzkkbzQkZzEkdDE3NTU2MjExNDgkajUxJGwwJGgw",
      title: "Beaches",
    },
    {
      image:
        "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?_gl=1*1htwquu*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MjExMzkkbzQkZzEkdDE3NTU2MjExNzMkajI2JGwwJGgw",
      title: "Mountains",
    },
    {
      image:
        "https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?_gl=1*18isfsq*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MjExMzkkbzQkZzEkdDE3NTU2MjEyMzMkajM4JGwwJGgw",
      title: "Historical ",
    },
    {
      image:
        "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?_gl=1*hz5jxi*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MjExMzkkbzQkZzEkdDE3NTU2MjExODkkajEwJGwwJGgw",
      title: "Wildlife ",
    },
    {
      image:
        "https://images.pexels.com/photos/1378723/pexels-photo-1378723.jpeg?_gl=1*14x5ds3*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MjExMzkkbzQkZzEkdDE3NTU2MjEyODMkajU5JGwwJGgw",
      title: "Romantic ",
    },
    {
      image:
        "https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?_gl=1*4v7vih*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MjExMzkkbzQkZzEkdDE3NTU2MjEzMDIkajQwJGwwJGgw",
      title: "Adventure",
    },
    {
      image:
        "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?_gl=1*hz5jxi*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MjExMzkkbzQkZzEkdDE3NTU2MjExODkkajEwJGwwJGgw",
      title: "Wildlife ",
    },
    {
      image:
        "https://images.pexels.com/photos/1378723/pexels-photo-1378723.jpeg?_gl=1*14x5ds3*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MjExMzkkbzQkZzEkdDE3NTU2MjEyODMkajU5JGwwJGgw",
      title: "Romantic ",
    },
    {
      image:
        "https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?_gl=1*4v7vih*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MjExMzkkbzQkZzEkdDE3NTU2MjEzMDIkajQwJGwwJGgw",
      title: "Adventure",
    },
    {
      image:
        "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?_gl=1*hz5jxi*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MjExMzkkbzQkZzEkdDE3NTU2MjExODkkajEwJGwwJGgw",
      title: "Wildlife ",
    },
    {
      image:
        "https://images.pexels.com/photos/1378723/pexels-photo-1378723.jpeg?_gl=1*14x5ds3*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MjExMzkkbzQkZzEkdDE3NTU2MjEyODMkajU5JGwwJGgw",
      title: "Romantic ",
    },
    {
      image:
        "https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?_gl=1*4v7vih*_ga*MTEzMzc3MjUyLjE3NTQ0MDI0OTA.*_ga_8JE65Q40S6*czE3NTU2MjExMzkkbzQkZzEkdDE3NTU2MjEzMDIkajQwJGwwJGgw",
      title: "Adventure",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-26 mb-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-14">
        Categories
      </h1>

      <Swiper
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 }, // screens >= 640px
          768: { slidesPerView: 4 }, // screens >= 768px
          1024: { slidesPerView: 6 }, // screens >= 1024px
        }}
      >
        {categories.map((item, i) => (
          <SwiperSlide key={i} className="min-w-[180px] px-3">
            <div className="flex flex-col items-center">
              <div className="relative w-full h-[200px] md:h-[334px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-lg object-cover  rounded-t-full rounded-b-full"
                />
              </div>
              <h2 className="text-3xl font-semibold mt-4">{item.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
