"use client";
import React, { useState } from "react";

const InputFloating = ({ label, value, onChange, type = "text", className = "w-full sm:w-1/4" }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <label
        className={`absolute left-3 transition-all pointer-events-none px-1 bg-white ${
          isFocused || value
            ? "text-sm -top-2 text-primary-light"
            : "text-gray-700 top-3"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded-md py-3 px-4 focus:outline-none bg-white border border-gray-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value !== "")}
      />
    </div>
  );
};

export default InputFloating;