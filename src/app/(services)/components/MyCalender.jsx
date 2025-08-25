"use client";

import { useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const MyCalendar = ({ selected, onClose, onDateSelect }) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={calendarRef}
      className="absolute z-50 p-4 w-[90vw] max-w-sm rounded-lg shadow-lg bg-slate-50
    top-full left-1/2 transform -translate-x-1/2 mt-2 sm:mt-0 sm:left-auto sm:top-auto sm:translate-x-0 sm:translate-y-0"
    >
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={(date) => {
          if (date) {
            onDateSelect(date);
          }
        }}
      />
    </div>
  );
};

export default MyCalendar;
