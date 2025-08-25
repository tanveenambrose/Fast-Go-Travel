import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import TabCard from "./TabCard";
import showToast from "@/utils/showToast";
import { Calendar1, ChevronDown, MapPin, Search, User } from "lucide-react";

const InnerTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = [
    { id: 0, name: "One Way", fields: ["from", "to", "depart", "economy"] },
    {
      id: 1,
      name: "Round Trip",
      fields: ["from", "to", "depart", "return", "economy"],
    },
    { id: 2, name: "Multi City", fields: ["from", "to", "depart", "economy"] },
  ];

  const renderField = (field) => {
    switch (field) {
      case "from":
        return (
          <TabCard
            fromTo="From"
            cityCode="DAK"
            city="Dhaka"
            airport="Bangladesh, Shahjalal International Airport"
            showArrow
          />
        );
      case "to":
        return (
          <TabCard
            fromTo="To"
            cityCode="KUL"
            city="Kuala Lumpur"
            airport="Malaysia, Kuala Lumpur International Airport"
          />
        );
      case "depart":
      case "return":
        return <TabCard dateField styling="cursor-pointer" enableDatePicker />;
      case "economy":
        return <TabCard economy />;
      default:
        return null;
    }
  };

  return (
    <div className=" mx-auto mt-5 flex justify-center">
      <div className="w-full">
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          {/* Tab Headers */}
          <TabList className="flex items-center justify-center gap-4 lg:justify-start">
            {tabs.map((tab, idx) => (
              <Tab
                key={tab.id}
                className={({ selected }) =>
                  `relative flex items-center gap-2 px-3 py-1 lg:font-semibold transition-all text-sm md:text-base ${
                    selected ? "text-blue-600" : "text-black"
                  }`
                }
              >
                <span
                  className={`w-4 h-4 border-2 rounded-full text-sm ${
                    selectedIndex === idx
                      ? "border-blue-500 border-4 scale-110"
                      : ""
                  }`}
                />
                {tab.name}
              </Tab>
            ))}
          </TabList>

          {/* Tab Content */}
          <TabPanels className="mt-3">
            {tabs.map((tab) => (
              <TabPanel
                key={tab.id}
                className="relative flex flex-col gap-3 lg:flex-row lg:items-center"
              >
                <div className="py-2 px-5 border-[1px] rounded-lg mt-2">
                  {/* Search Form */}
                  <div className="grid grid-cols-1 md:grid-cols-10 gap-4 items-center">
                    {/* From Input */}
                    <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        From
                      </label>
                      <div className="relative flex items-center pr-4">
                        <MapPin size={15} />
                        <input
                          type="text"
                          className="w-full p-2 text-sm focus:outline-0"
                          value="BarcelonaBeach V"
                          readOnly
                        />
                        <ChevronDown />
                      </div>
                    </div>

                    {/* To Input */}
                    <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        To
                      </label>
                      <div className="relative flex items-center pr-4">
                        <MapPin size={15} />
                        <input
                          type="text"
                          className="w-full p-2 text-sm focus:outline-0"
                          value="BarcelonaBeach ~"
                          readOnly
                        />
                        <ChevronDown />
                      </div>
                    </div>

                    {/* Departure Date */}
                    <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Departure
                      </label>
                      <div className="relative flex items-center pr-4">
                        <Calendar1 />
                        <input
                          type="text"
                          className="w-full p-2 text-sm focus:outline-0 "
                          value="22May2025"
                          readOnly
                        />
                        <ChevronDown />
                      </div>
                    </div>

                    {/* Return Date */}
                    <div className="md:col-span-2 border-b-2 md:border-b-0 md:border-r-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Return
                      </label>
                      <div className="relative flex items-center pr-4">
                        <Calendar1 />
                        <input
                          type="text"
                          className="w-full p-2 text-sm focus:outline-0"
                          value="22May2025"
                          readOnly
                        />
                        <ChevronDown />
                      </div>
                    </div>

                    {/* Guest Selector */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Guest
                      </label>
                      <div className="relative flex items-center pr-4">
                        <User />
                        <input
                          type="text"
                          className="w-full p-2 focus:outline-0 text-sm"
                          value="adults, 0 children, 0 youth"
                          readOnly
                        />
                        <ChevronDown />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button should also respect responsive layout */}
                <div className="w-full lg:w-auto mt-3 lg:mt-0">
                  <button
                    onClick={showToast}
                    className="w-full lg:w-auto flex justify-center items-center gap-2 px-5 py-4 lg:py-6 text-base font-bold text-white bg-gradient-to-r from-[#0A60F9] to-[#B004FE] rounded-lg cursor-pointer lg:px-10 lg:text-lg"
                  >
                    <Search />
                    Search
                  </button>
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default InnerTab;
