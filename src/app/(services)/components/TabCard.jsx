"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ArrowRightLeft } from "lucide-react";
import MyCalendar from "./MyCalender";
import TravelClassModal from "./TravelClassModal";

export default function TabCard({
  fromTo,
  cityCode,
  city,
  airport,
  dateField,
  economy,
  showArrow,
  styling,
  enableDatePicker,
}) {
  const today = new Date();

  // Store selected date as actual Date object
  const [selectedDate, setSelectedDate] = useState(today);
  const [showCalendar, setShowCalendar] = useState(false);

  const [travelerModalOpen, setTravelerModalOpen] = useState(false);
  const [travelerData, setTravelerData] = useState({
    travelClass: "Economy",
    adults: 1,
    children: 0,
    infants: 0,
  });

  const formattedDate = {
    dayMonth: format(selectedDate, "dd MMMM"),
    weekday: format(selectedDate, "EEEE"),
    year: format(selectedDate, "yyyy"),
  };

  return (
    <div
      onClick={() => {
        if (economy) {
          setTravelerModalOpen(true);
        } else if (dateField && enableDatePicker) {
          setShowCalendar(true);
        }
      }}
      className={`relative flex-grow border-2 rounded-lg cursor-pointer bg-white text-black ${styling}`}
    >
      {fromTo && (
        <span className="absolute text-sm top-1 left-1">{fromTo}</span>
      )}

      {dateField && (
        <h4 className="py-1 text-base font-semibold text-center">
          {formattedDate.dayMonth}
        </h4>
      )}
      {economy && (
        <h4 className="py-1 text-base font-semibold text-center">
          {travelerData.travelClass}
        </h4>
      )}
      {cityCode && (
        <h4 className="py-1 text-base font-semibold text-center">{cityCode}</h4>
      )}
      <div className="mx-3 my-1 border-t border-gray-300"></div>

      {dateField && (
        <>
          <h4 className="px-3 text-sm font-semibold">
            {formattedDate.weekday}
          </h4>
          <p className="px-3 pb-2 text-xs truncate w-52">
            {formattedDate.year}
          </p>
        </>
      )}
      {economy && (
        <>
          <h4 className="px-3 text-sm font-semibold">
            {travelerData.travelClass}
          </h4>
          <p className="px-3 pb-2 text-xs truncate w-52">
            {travelerData.adults} Adult{travelerData.adults > 1 ? "s" : ""},{" "}
            {travelerData.children} Children, {travelerData.infants} Infant
          </p>
        </>
      )}
      {city && <h4 className="px-3 text-sm font-semibold">{city}</h4>}
      {airport && (
        <p className="px-3 pb-2 overflow-hidden text-xs truncate lg:w-52">
          {airport}
        </p>
      )}

      {showArrow && (
        <span className="absolute right-0 z-10 flex items-center justify-center w-8 h-8 p-2 bg-blue-400 rounded-full lg:-translate-y-1/2 lg:-right-6 lg:top-1/2 -bottom-6">
          <ArrowRightLeft color="white" className="w-5 rotate-90 lg:rotate-0" />
        </span>
      )}

      {/* ✅ Pass selected date */}
      {showCalendar && enableDatePicker && (
        <MyCalendar
          selected={selectedDate}
          onClose={() => setShowCalendar(false)}
          onDateSelect={(dateObj) => {
            setSelectedDate(dateObj);
            setShowCalendar(false);
          }}
        />
      )}

      {economy && (
        <TravelClassModal
          isOpen={travelerModalOpen}
          onClose={() => setTravelerModalOpen(false)}
          onApply={setTravelerData}
          current={travelerData}
        />
      )}
    </div>
  );
}
