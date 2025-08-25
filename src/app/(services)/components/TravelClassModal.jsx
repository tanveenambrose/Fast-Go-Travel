"use client";

import { useState } from "react";

const TravelClassModal = ({ isOpen, onClose, onApply, current }) => {
  const [travelClass, setTravelClass] = useState(current.travelClass);
  const [adults, setAdults] = useState(current.adults);
  const [children, setChildren] = useState(current.children);
  const [infants, setInfants] = useState(current.infants);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm p-5 text-black bg-white rounded shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-lg font-semibold">Select Class & Travelers</h2>

        {/* Travel Class */}
        <div className="mb-3">
          <label className="block mb-1">Class</label>
          <select
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
            className="w-full p-2 text-black bg-white border border-gray-300 rounded"
          >
            <option value="Economy">Economy</option>
            <option value="Premium Economy">Premium Economy</option>
            <option value="Business">Business</option>
            <option value="First">First</option>
          </select>
        </div>

        {/* Travelers */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label>Adults</label>
            <input
              type="number"
              min={1}
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full p-2 text-black bg-white border border-gray-300 rounded"
            />
          </div>
          <div>
            <label>Children</label>
            <input
              type="number"
              min={0}
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-full p-2 text-black bg-white border border-gray-300 rounded"
            />
          </div>
          <div>
            <label>Infants</label>
            <input
              type="number"
              min={0}
              value={infants}
              onChange={(e) => setInfants(Number(e.target.value))}
              className="w-full p-2 text-black bg-white border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>
          <button
            onClick={() => {
              onApply({ travelClass, adults, children, infants });
              onClose();
            }}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelClassModal;
