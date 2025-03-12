"use client";
import React, { useState } from "react";


const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [inputFocused, setInputFocused] = useState(false); 
  const agentNames = [
    { name: "New York", value: "New York" },
    { name: "Rome", value: "Rome" },
    { name: "London", value: "London" },
    { name: "Istanbul", value: "Istanbul" },
    { name: "Paris", value: "Paris" },
  ];
  const data = [
    {
      id: 1,
      mobile: "7075492300",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:52",
      assigned: "",
    },
    {
      id: 2,
      mobile: "9594436684",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:52",
      assigned: "",
    },
    {
      id: 3,
      mobile: "7508303318",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:52",
      assigned: "",
    },
    {
      id: 4,
      mobile: "9738255698",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:47",
      assigned: "",
    },
    {
      id: 5,
      mobile: "9880573322",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:38",
      assigned: "",
    },
    {
      id: 6,
      mobile: "9464311174",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:38",
      assigned: "",
    },
    {
      id: 7,
      mobile: "9657530029",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:29",
      assigned: "Swathi",
    },
    {
      id: 8,
      mobile: "8860056707",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:27",
      assigned: "",
    },
  ];

  const filteredData = data.filter((item) =>
    item.callDate.includes(searchTerm)
  );

  return (
    <div className="p-4 sm:p-6 flex-1 max-w-full overflow-x-hidden">
        {/* Search Box */}
        <div className="gap-2 mb-2 flex justify-content-center">
        <div className="relative w-full sm:3/2 md:w-1/2 lg:w-1/4 border border-primary rounded">
          <input
            type="text"
            id="searchTerm"
            className="block w-full px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(searchTerm !== '')}
          />
          <label
            htmlFor="searchTerm"
            className={`absolute text-sm text-gray-500 duration-300 transform origin-[0] bg-white px-2 
              ${inputFocused ? '-translate-y-4 scale-75 top-2 peer-focus:px-2 peer-focus:text-blue-600' : (searchTerm !== '' ? '-translate-y-4 scale-75 top-2 peer-focus:px-2 peer-focus:text-blue-600' : 'scale-100 -translate-y-1/2 top-1/2')}`}
          >
            LastNDays (Enter 0 for today)
          </label>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">
          Search
        </button>
      </div>
      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className=" table-auto rounded-lg min-w-full ">
          {/* Table Header */}
          <thead className="border-b-2 border-primary text-gray-700 ">
            <tr>
              <th className="px-4 py-2 border border-white text-center">#</th>
              <th className="px-4 py-2 border border-white text-center">
                Mobile
              </th>
              <th className="px-4 py-2 border border-white text-center">
                Campaign
              </th>
              <th className="px-4 py-2 border border-white text-center">
                Queue
              </th>
              <th className="px-4 py-2 border border-white text-center">
                Customer Name
              </th>
              <th className="px-4 py-2 border border-white text-center">
                Direction
              </th>
              <th className="px-4 py-2 border border-white text-center">
                Call Date
              </th>
              <th className="px-4 py-2 border border-white text-center">
                Assigned
              </th>
              <th className="px-4 py-2 border border-white text-center">-</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={item.id}
                className={`border-white hover:bg-gray-300 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-200"
                }`}
              >
                <td className="px-4 py-2 border border-white text-center">
                  {item.id}
                </td>
                <td className="px-4 py-2 border border-white text-center">
                  {item.mobile}
                </td>
                <td className="px-4 py-2 border border-white text-center">
                  {item.campaign}
                </td>
                <td className="px-4 py-2 border border-white text-center">
                  {item.queue}
                </td>
                <td className="px-4 py-2 border border-white text-center">
                  {item.customer}
                </td>
                <td className="px-4 py-2 border border-white text-center">
                  {item.direction}
                </td>
                <td className="px-4 py-2 border border-white text-center">
                  {item.callDate}
                </td>
                <td className="px-4 py-2 border border-white text-center">
                  {item.assigned}
                </td>
                <td className="px-4 py-2 border border-white text-center flex gap-2">
                  <button
                    className="border border-green-500 text-green-500 text-xs px-3 py-1 rounded-lg"
                    onClick={() => setIsModalOpen(true)}
                  >
                    AssignTo
                  </button>
                  <button className="border border-green-500 text-green-500 text-xs px-3 py-1 rounded-lg">
                    Lead
                  </button>
                  <button className="border border-red-500 text-red-500 text-xs px-3 py-1 rounded-lg">
                    Not Interested
                  </button>
                  <button className="border border-gray-500 text-gray-500 text-xs px-3 py-1 rounded-lg">
                    DND
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
  <div className="fixed inset-x-0 top-0 flex justify-center items-center z-50">
    {/* Background Overlay */}
    <div className="fixed inset-0 bg-black opacity-50"></div>

    {/* Modal Container */}
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-2/3 sm:w-2/3 md:w-1/2 lg:w-1/3 min-h-[200px] max-h-[90vh] overflow-y-auto z-10 
    fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-lg sm:text-xl font-semibold">Assign</h2>
        <button
          className="text-gray-500 hover:text-gray-700 bg-gray-200 p-1 border border-black rounded text-sm h-7 w-7"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>
      </div>

      {/* Dropdown Section */}
      <div className="m-4 mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center">
        
        {/* Dropdown Container */}
        <div className="relative border border-primary-light rounded w-full sm:w-1/2">
          {/* Floating Label */}
          <label
            className={`absolute left-3 transition-all pointer-events-none px-1 bg-white 
              ${
                isFocused || selectedAgent
                  ? "text-sm -top-2 text-primary-light"
                  : "text-gray-700 top-2"
              }`}
          >
            Agents
          </label>

          {/* Dropdown */}
          <select
            className="w-full rounded-md py-2 px-3 focus:outline-none bg-white appearance-none"
            value={selectedAgent}
            onChange={(e) => {
              setSelectedAgent(e.target.value);
              setIsOpen(false);
            }}
            onFocus={() => {
              setIsFocused(true);
              setIsOpen(true);
            }}
            onBlur={() => {
              setIsFocused(selectedAgent !== "");
              setIsOpen(false);
            }}
          >
            <option value="" hidden></option>
            {agentNames.map((option, index) => (
              <option key={index} value={option.value} disabled={option.value === ""}>
                {option.name}
              </option>
            ))}
          </select>

          {/* Dropdown Icon */}
          <i className={`pi ${isOpen ? "pi-chevron-up" : "pi-chevron-down"} absolute top-3 right-2 text-gray-500 pointer-events-none transition-all`}></i>
        </div>

        {/* Assign Button */}
        <div className="flex justify-end w-full sm:w-auto">
          <button
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark w-full sm:w-auto"
            onClick={() => setIsModalOpen(false)}
          >
            Assign
          </button>
        </div>

      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default TableComponent;
