"use client";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import CustomDropdown from "../CustomDropdown";

const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("");


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
            onBlur={() => setInputFocused(searchTerm !== "")}
          />
          <label
            htmlFor="searchTerm"
            className={`absolute text-sm text-gray-500 duration-300 transform origin-[0] bg-white px-2 
              ${
                inputFocused
                  ? "-translate-y-4 scale-75 top-2 peer-focus:px-2 peer-focus:text-blue-600"
                  : searchTerm !== ""
                  ? "-translate-y-4 scale-75 top-2 peer-focus:px-2 peer-focus:text-blue-600"
                  : "scale-100 -translate-y-1/2 top-1/2"
              }`}
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
      <Dialog
        visible={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        header="Assign"
        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
        closable
        modal 
        draggable={false}

      >

        <div className="m-4 mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center">
          {/* Dropdown Container */}
          <CustomDropdown
            label="Agents"
            options={agentNames}
            value={selectedAgent}
            onChange={setSelectedAgent}
            className="w-full sm:w-1/2 border-primary-light"
          />

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
      </Dialog>
    </div>
  );
};

export default TableComponent;
