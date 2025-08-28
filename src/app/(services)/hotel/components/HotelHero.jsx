import Image from "next/image";

const HotelHero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-hidden">
      {/* Left Big Image */}
      <div className="relative aspect-[4/3] w-full  transition-transform transform hover:scale-[1.01] duration-300 ">
        <Image
          src="/images/hero1.png"
          alt="hero1"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Grid */}
      <div className="grid grid-cols-2 gap-2 ">
        {["hero2.png", "hero3.png", "hero4.png", "hero5.png"].map((img, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] w-full  transition-transform transform hover:scale-[1.01] duration-300 "
          >
            <Image
              src={`/images/${img}`}
              alt={`hero${i + 2}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelHero;
