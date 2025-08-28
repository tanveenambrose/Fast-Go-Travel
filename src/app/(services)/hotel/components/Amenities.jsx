import {
  Wifi,
  Coffee,
  Car,
  ConciergeBell,
  Plane,
  Utensils,
  Dumbbell,
  Droplet,
} from "lucide-react";

export default function Amenities() {
  const items = [
    { icon: <Wifi size={18} />, label: "Free WiFi" },
    { icon: <Droplet size={18} />, label: "Pool" },
    { icon: <Utensils size={18} />, label: "Restaurants" },
    { icon: <Plane size={18} />, label: "Airport Shuttle" },
    { icon: <Car size={18} />, label: "Parking" },
    { icon: <Dumbbell size={18} />, label: "Spa" },
    { icon: <Coffee size={18} />, label: "Coffee Shop" },
    { icon: <ConciergeBell size={18} />, label: "Concierge" },
  ];

  return (
    <div className="mt-26 mx-5 md:mx-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Hotel Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-900">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
