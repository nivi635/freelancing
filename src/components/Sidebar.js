'use client';
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';

export default function SidebarComp() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* Burger Menu Button for Mobile */}
      <Button icon="pi pi-bars" onClick={() => setVisible(!visible)} className="lg:hidden" />
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transition-transform transform ${visible ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:block`}>
        <SidebarContent onClose={() => setVisible(false)} />
      </div>
      
      {/* Overlay for Mobile */}
      {visible && <div className="fixed inset-0 bg-black opacity-50 lg:hidden" onClick={() => setVisible(false)}></div>}
    </div>
  );
}

function SidebarContent({ onClose }) {
  const [workDropdown, setWorkDropdown] = useState(false);
  const [monitorDropdown, setMonitorDropdown] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white w-full px-4">
      {/* Close Button for Mobile */}
      <div className="lg:hidden flex justify-end p-4">
        <Button icon="pi pi-times" className="text-white" onClick={onClose} />
      </div>
      
      {/* Company Logo & Name */}
      <div className="flex flex-col items-center justify-center py-4">
        <img src="/path-to-logo.png" alt="CAPINEX Logo" className="h-8" />
        <p className="text-xs text-gray-400 mt-1">MONEY MARK</p>
      </div>

      {/* Sidebar Items */}
      <div className="overflow-y-auto flex-1">
        <ul className="list-none space-y-4 mt-3">
          <SidebarItem icon="pi pi-home" label="Home" />
          <SidebarItem icon="pi pi-user" label="Admin Board" />

          {/* My Work Dropdown */}
          <SidebarDropdown 
            icon="pi pi-briefcase" 
            label="My Work" 
            isOpen={workDropdown} 
            toggle={() => setWorkDropdown(!workDropdown)}
            items={["Leads", "Backend Processing", "Cold Calling", "Backlog", "Missed Calls"]}
          />

          <SidebarItem icon="pi pi-check-circle" label="Disbursed Leads" />
          <SidebarItem icon="pi pi-star" label="Customer" />
          <SidebarItem icon="pi pi-users" label="Users" />
          <SidebarItem icon="pi pi-ban" label="DND" />
          <SidebarItem icon="pi pi-send" label="Campaign" />

          {/* Monitoring Dropdown */}
          <SidebarDropdown 
            icon="pi pi-headphones" 
            label="Monitoring" 
            isOpen={monitorDropdown} 
            toggle={() => setMonitorDropdown(!monitorDropdown)}
            items={["Agent Board"]}
          />
        </ul>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <li>
      <a className="flex items-center space-x-3 text-white hover:text-gray-300" href="#">
        <i className={`${icon}`}></i>
        <span>{label}</span>
      </a>
    </li>
  );
}

function SidebarDropdown({ icon, label, isOpen, toggle, items }) {
  return (
    <li>
      <div className="p-ripple flex items-center justify-between text-white cursor-pointer hover:text-gray-300" onClick={toggle}>
        <div className="flex items-center space-x-3">
          <i className={icon}></i>
          <span className="font-medium">{label}</span>
        </div>
        <i className={`pi pi-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
        <Ripple />
      </div>
      <ul className={`list-none pl-6 mt-2 space-y-2 ${isOpen ? '' : 'hidden'}`}>
        {items.map((item, index) => (
          <li key={index}>
            <a className="text-white hover:text-gray-300" href="#">{item}</a>
          </li>
        ))}
      </ul>
    </li>
  );
}
