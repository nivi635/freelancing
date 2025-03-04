import React from "react";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";

export default function Header() {
  return (
    <div className="bg-white  p-2 pl-4 border-b border-gray-300 ">
      <div className="flex justify-between items-center">
        {/* Left Section - Dashboard Title */}
        <h2 className="text-lg md:text-2xl font-bold">Dashboard</h2>

        {/* Right Section - Links & Icons */}
        <div className="flex items-center gap-4">
          {/* Visible Links for Larger Screens */}
          <div className="hidden md:flex items-center gap-4">
            <a className="text-blue-500 hover:underline" href="#">
              Tutorial
            </a>
            <a className="text-blue-500 hover:underline" href="#">
              EMI Calculator
            </a>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full">
              NO LIVE CALL
            </button>
          </div>

          {/* Mobile-Friendly Icons (Shown on Small Screens) */}
          <div className="flex md:hidden items-center gap-3">
            <a href="#" className="text-gray-600 text-xl" aria-label="Tutorial">
              <i className="pi pi-book"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 text-xl"
              aria-label="EMI Calculator"
            >
              <i className="pi pi-calculator"></i>
            </a>
          </div>

          {/* Notification Bell & Avatar (Always Visible) */}
          <div className="relative">
            <i className="pi pi-bell p-overlay-badge text-xl">
              <Badge value="2" severity="danger"></Badge>
            </i>
          </div>
          <Avatar
            icon="pi pi-user"
            size="small"
            style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
            shape="circle"
          />
        </div>
      </div>
      <p className="ml-1 text-gray-600 italic text-sm">
        <i className="pi pi-lightbulb text-sm" style={{ color: "yellow" }}></i> The only
        way to do great work is to love what you do - Steve Jobs
      </p>
    </div>
  );
}
