"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="p-6">
      {/* Search Box */}
      <div className="card gap-2 mb-2 flex justify-content-center">
        <FloatLabel>
          <InputText
            id="username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            unstyled={true}
          />
          <label htmlFor="username" className="text-sm">
            LastNDays (Enter 0 for today)
          </label>
        </FloatLabel>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">
          Search
        </button>
      </div>
      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full table-auto rounded-lg">
          {/* Table Header */}
          <thead className="border-b-2 border-primary text-gray-700">
            <tr>
              <th className="px-4 py-2 border border-white text-center">
                #
              </th>
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
              <th className="px-4 py-2 border border-white text-center">
                {" "}
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {filteredData.map((item,index) => (
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
                  <button className="border border-green-500 text-green-500 text-xs px-3 py-1 rounded-lg">
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
    </div>
  );
};

export default TableComponent;
