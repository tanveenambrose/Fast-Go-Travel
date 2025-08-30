import { Calendar1, ChevronDown, MapPin, User } from "lucide-react";

const VisaSearchBar = () => {
  return (
    <div className="py-2 px-5 border-[1px] rounded-lg mt-2">
      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 items-center">
        {/* From Input */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <div className="relative flex items-center pr-4">
            <MapPin size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
              value="BarcelonaBeach"
              readOnly
            />
            <ChevronDown />
          </div>
        </div>

        {/* To Input */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Intended Flying Date
          </label>
          <div className="relative flex items-center pr-4">
            <Calendar1 size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
              value="02 jun,2025"
              readOnly
            />
            <ChevronDown />
          </div>
        </div>

        {/* Departure Date */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nationality
          </label>
          <div className="relative flex items-center pr-4">
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0 "
              value="Bangladesh"
              readOnly
            />
            <ChevronDown />
          </div>
        </div>

        {/* Return Date */}
        <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Travelers
          </label>
          <div className="relative flex items-center pr-4">
            <User size={16} />
            <input
              type="text"
              className="w-full p-2 text-sm focus:outline-0"
              value="1 Travelers"
              readOnly
            />
            <ChevronDown />
          </div>
        </div>

        {/* Guest Selector */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country of Residennce
          </label>
          <div className="relative flex items-center pr-4">
            <MapPin size={16} />
            <input
              type="text"
              className="w-full p-2 focus:outline-0 text-sm"
              value="Bangladesh"
              readOnly
            />
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaSearchBar;
