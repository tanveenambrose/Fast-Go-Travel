import { MapPin, Star } from "lucide-react";

export default function HotelInfo() {
  return (
    <div className="mx-5 md:mx-0">
      <h1 className="text-2xl md:text-4xl font-bold mb-3">Grand Hotel Dhaka</h1>
      <div className="flex items-center gap-2 text-gray-400 mt-2">
        <MapPin size={16} />
        <span>Bashundhara, Dhaka — 1.2 km from center</span>
      </div>

      <div className="flex items-center mt-2">
        <Star className="text-[#055BC9]" size={16} />
        <Star className="text-[#055BC9]" size={16} />
        <Star className="text-[#055BC9]" size={16} />
        <Star className="text-[#055BC9]" size={16} />
        <span className="text-[#055BC9] font-semibold mx-3">8.7 Fabulous</span>
        <span className="text-gray-400">(2,345 reviews)</span>
      </div>

      <p className="text-gray-900 mt-3 max-w-2xl md:text-base text-sm">
        A modern hotel in the heart of Dhaka Bashundhara district, offering
        luxurious accommodation with stunning city views. Perfect for both
        business and leisure travelers.
      </p>
    </div>
  );
}
