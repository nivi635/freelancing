'use client';
import React, { useState, useCallback } from "react";
import { useDropzone } from 'react-dropzone';

export default  function  DNDComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [skipHeader, setSkipHeader] = useState(false);
  const [append, setAppend] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const agentNames = [
    { name: "Indian", value: "Indian" },
    { name: "HDFC", value: "HDFC" },
    { name: "SBI", value: "SBI" },
    { name: "Canara", value: "Canara" },
    { name: "Paris", value: "Paris" },
  ];

  const handleUpload = () => {
    console.log("Uploading files:", files);
    console.log("Skip Header:", skipHeader);
    console.log("Append:", append);
    // Implement your upload logic here
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between p-5">
      {/* Left Section (Search and Add CMD) */}
      <div className="flex flex-col gap-2 w-full lg:w-1/2 p-3">
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-2 mb-5">
          <input
            type="text"
            value={searchTerm}
            className="p-2 border border-gray-300 rounded-xl w-full sm:w-1/2"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-primary text-white rounded w-full sm:w-auto"
            onClick={() => console.log(searchTerm)}
          >
            Search
          </button>
        </div>

        {/* Add CMD Section */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative rounded w-full sm:w-1/2">
            {/* Floating Label */}
            <label
              className={`absolute left-3 transition-all pointer-events-none px-1 bg-white ${
                isFocused || selectedBank
                  ? "text-sm -top-2 text-primary-light"
                  : "text-gray-700 top-3"
              }`}
            >
              Bank Name *
            </label>

            {/* Dropdown */}
            <select
              className="w-full rounded-md py-3 px-4 focus:outline-none bg-white appearance-none border border-gray-400"
              value={selectedBank}
              onChange={(e) => {
                setSelectedBank(e.target.value);
                setIsOpen(false);
              }}
              onFocus={() => {
                setIsFocused(true);
                setIsOpen(true);
              }}
              onBlur={() => {
                setIsFocused(selectedBank !== "");
                setIsOpen(false);
              }}
            >
              <option value="" hidden></option>
              {agentNames.map((option, index) => (
                <option
                  key={index}
                  value={option.value}
                  disabled={option.value === ""}
                >
                  {option.name}
                </option>
              ))}
            </select>

            {/* Dropdown Icon */}
            <i
              className={`bx ${
                isOpen ? "bxs-down-arrow" : "bxs-up-arrow"
              } absolute top-4 right-2 text-gray-500 pointer-events-none transition-all text-xs`}
            ></i>
          </div>
          <div className="relative rounded w-full sm:w-1/2 mt-2 sm:mt-0">
            {/* Floating Label */}
            <label
              className={`absolute left-3 transition-all pointer-events-none px-1 bg-white ${
                isInputFocused || inputValue
                  ? "text-sm -top-2 text-primary-light"
                  : "text-gray-700 top-3"
              }`}
            >
              Mobile *
            </label>

            {/* Input */}
            <input
              type="text"
              className="w-full rounded-md py-3 px-4 focus:outline-none bg-white border border-gray-400"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onFocus={() => {
                setIsInputFocused(true);
              }}
              onBlur={() => {
                setIsInputFocused(inputValue !== "");
              }}
            />
          </div>
          <button className="bg-primary text-white rounded w-full sm:w-1/4 ml-0 sm:ml-3 mt-2 sm:mt-0">
            Add DND
          </button>
        </div>
      </div>

      {/* Right Section (Drag & Drop and Upload) */}
      <div className="border-2 border border-gray-400 p-5 rounded w-full lg:w-80 mt-5 lg:mt-0">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed border-gray-400 p-5 text-center mb-2 text-gray-600 ${isDragActive ? 'border-primary' : ''}`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the Docs here ...</p>
          ) : (
            <p>Drag & Drop Docs</p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-5 text-gray-600 mb-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" checked={skipHeader} onChange={(e) => setSkipHeader(e.target.checked)} /> Skip Header
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" checked={append} onChange={(e) => setAppend(e.target.checked)} /> Append
          </label>
        </div>
        <button className="w-full sm:w-1/2 px-4 py-2 bg-primary text-white rounded font-bold" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
};
