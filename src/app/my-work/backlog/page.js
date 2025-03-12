'use client'
import { useState } from "react";

export default function Backlog() {
  const [activeTab, setActiveTab] = useState("User");
  const tabs = ["User", "Org"];
  const statuses = ["ToDo", "Discussion", "Followup", "Closed"];

  return (
    <div className="p-4 sm:p-6 w-full">

      <div className="flex flex-col sm:flex-row items-center justify-between mb-7">
        {/* Tabs */}
        <div className="flex gap-2 sm:gap-10 p-1 py-2 w-full md:w-1/2 sm:w-1/2 lg:w-1/4 justify-center border border-gray-300 border-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 sm:px-6 py-2 border rounded-md text-sm ${
                activeTab === tab ? "bg-gray-200" : "bg-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Create Button */}
        <div className="flex mt-4 sm:mt-0">
          <button className="bg-black text-white px-4 py-2 rounded-md">Create +</button>
        </div>
      </div>
  
      {/* Status Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {statuses.map((status) => (
          <div
            key={status}
            className="bg-gray-100 rounded-md p-4 text-center text-gray-500"
          >
            {status} (0)
          </div>
        ))}
      </div>
    </div>
  );
}