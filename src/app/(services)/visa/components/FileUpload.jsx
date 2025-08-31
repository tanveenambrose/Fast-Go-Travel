"use client";

import { useState } from "react";
import Image from "next/image";

export default function FileUpload({ label }) {
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">{label}</label>

      {/* Entire container is a clickable label */}
      <label
        htmlFor={label}
        className="flex items-center border border-gray-300 rounded-lg bg-white cursor-pointer"
      >
        <input
          type="file"
          id={label}
          className="hidden"
          onChange={handleChange}
        />
        <Image
          src="/images/file_upload.svg"
          alt="file upload"
          height={35}
          width={35}
        />
        <span className="ml-3 text-xs text-gray-500 truncate">
          {fileName || "Upload File"}
        </span>
      </label>
    </div>
  );
}
