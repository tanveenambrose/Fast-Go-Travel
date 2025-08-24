"use client";

import { useEffect, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { BookCopy, BusFront, CardSim, Hotel, Plane, Ship } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import InnerTab from "./InnerTab";
import showToast from "@/utils/showToast";

// Map paths to tab indices
const pathToIndex = {
  "/flight": 0,
  "/hotel": 1,
  "/bus": 2,
  "/visa": 3,
};

// Map indices back to paths
const indexToPath = {
  0: "/flight",
  1: "/hotel",
  2: "/bus",
  3: "/visa",
};

export default function TabSystem() {
  const pathname = usePathname();
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(
    pathToIndex[pathname] ?? 0
  );

  const tabs = [
    { tab: "Flight", icon: <Plane />, availabe: true },
    { tab: "Hotel", icon: <Hotel />, availabe: true },
    { tab: "Bus", icon: <BusFront />, availabe: true },
    { tab: "Visa", icon: <CardSim />, availabe: true },
    { tab: "Tour Packages", icon: <BookCopy />, availabe: false },
    { tab: "Cruises", icon: <Ship />, availabe: false },
  ];

  const commonTabClass = `relative flex flex-col lg:flex-row items-center gap-1 lg:gap-2 px-3 py-1 font-semibold transition-all duration-300 text-base lg:text-lg
  text-black rounded-lg`;

  // Update tab when pathname changes
  useEffect(() => {
    const newIndex = pathToIndex[pathname];
    if (newIndex !== undefined && newIndex !== selectedIndex) {
      setSelectedIndex(newIndex);
    }
  }, [pathname]);

  // Update URL when tab changes
  const handleTabChange = (index) => {
    setSelectedIndex(index);
    const newPath = indexToPath[index];
    if (newPath) {
      router.push(newPath);
    }
  };

  return (
    <div className="max-w-[1300px] flex justify-center px-3 lg:px-7 py-5 mx-auto bg-white rounded-lg mb-10 shadow-lg shadow-gray-300 border-2">
      <div className="w-full">
        <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
          <TabList className="flex flex-wrap items-center gap-7 lg:justify-start">
            {tabs.map((item) => (
              <Tab
                key={item.tab}
                onClick={() => item.availabe || showToast()}
                className={({ selected }) =>
                  `${commonTabClass} ${
                    selected ? "bg-blue-500 text-white" : "bg-white text-black"
                  }`
                }
              >
                {item.icon}
                {item.tab}
              </Tab>
            ))}
          </TabList>

          {/* <div className="w-full h-[1px] border-black/30 border-[1px] mt-1 lg:mt-3"></div> */}

          <TabPanels className="mt-10">
            <TabPanel>
              <InnerTab />
            </TabPanel>
            <TabPanel>
              <InnerTab />
            </TabPanel>
            <TabPanel>
              <InnerTab />
            </TabPanel>
            <TabPanel>
              <InnerTab />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
