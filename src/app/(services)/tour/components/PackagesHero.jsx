"use client";
import Image from "next/image";

const HoverImage = ({ src, alt }) => {
  return (
    <div className="group relative aspect-[4/3] w-full transition-transform transform hover:scale-[1.01] duration-300">
      {/* Base image */}
      <Image src={src} alt={alt} fill className="object-cover" />

      {/* Overlay (bottom half, fade-in) */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Image
          src="/images/tourOverlay.svg"
          alt={`${alt}-overlay`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

const PackagesHero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-hidden">
      {/* Left Big Image */}
      <HoverImage src="/images/tourHero1.svg" alt="hero1" />

      {/* Right Grid */}
      <div className="grid grid-cols-2 gap-2">
        {[
          "tourHero2.svg",
          "tourHero3.svg",
          "tourHero4.svg",
          "tourHero5.svg",
        ].map((img, i) => (
          <HoverImage key={i} src={`/images/${img}`} alt={`hero${i + 2}`} />
        ))}
      </div>
    </section>
  );
};

export default PackagesHero;
