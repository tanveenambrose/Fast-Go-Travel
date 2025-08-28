import { Banknote, Calendar1, FileType, MapPin, Search } from "lucide-react";

export default function SearchBar() {
  const tabs = [
    {
      icon: <MapPin color="blue" size={15} />,
      heading: "Location",
      des: "Where To Next?",
    },
    {
      icon: <FileType color="blue" size={15} />,
      heading: "Type",
      des: "Select trip type",
    },
    {
      icon: <Calendar1 color="blue" size={15} />,
      heading: "Duration",
      des: "Select trip duration",
    },
    {
      icon: <Banknote color="blue" size={17} />,
      heading: "Price",
      des: "Select trip budget",
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="w-full bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-stretch overflow-hidden">
        {tabs.map((t) => (
          <div
            key={t.heading}
            className="flex items-center gap-2 py-6 border-b md:border-b-0 md:border-r px-16"
          >
            <div className="flex flex-col gap-2">
              <h4 className="flex items-center text-base gap-1">
                {t.icon}
                <span className="text-sm font-semibold text-gray-800">
                  {t.heading}
                </span>
              </h4>
              <span className="text-sm text-gray-500">{t.des}</span>
            </div>
          </div>
        ))}

        {/* Search Button */}
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center px-10 py-4 text-lg hover:opacity-90 hover:from-purple-600 hover:to-purple-700 transition-colors duration-300 cursor-pointer">
          <Search className="text-xl" />
        </button>
      </div>
    </div>
  );
}
