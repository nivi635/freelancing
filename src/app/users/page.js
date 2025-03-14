"use client";
import React, { useState } from "react";

const UserManagement = () => {
  const [mobile, setMobile] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [userType, setUserType] = useState("User");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileFocused, setIsMobileFocused] = useState(false);
  const [isDisplayNameFocused, setIsDisplayNameFocused] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const agentNames = [
    { name: "Indian", value: "Indian" },
    { name: "HDFC", value: "HDFC" },
    { name: "SBI", value: "SBI" },
    { name: "Canara", value: "Canara" },
    { name: "Paris", value: "Paris" },
  ];

  const [users, setUsers] = useState([
    {
      id: 1,
      userName: "9000018001",
      displayName: "SWAMY",
      accessType: "User",
      org: "Top Management",
      designation: "TOP MANAGEMENT",
      email: "swamyadm@gmail.com",
      status: "Active",
    },
    {
      id: 2,
      userName: "9000016010",
      displayName: "Kavvana",
      accessType: "User",
      org: "AGENT",
      designation: "Agent",
      email: "",
      status: "Active",
    },
    {
      id: 3,
      userName: "9000018011",
      displayName: "Bhoomika",
      accessType: "User",
      org: "AGENT",
      designation: "Agent",
      email: "",
      status: "Active",
    },
    {
      id: 4,
      userName: "9000016000",
      displayName: "Rahul",
      accessType: "User",
      org: "TEAM RAHUL",
      designation: "Team Lead",
      email: "",
      status: "Active",
    },
    {
      id: 5,
      userName: "9000016012",
      displayName: "Sindhana",
      accessType: "User",
      org: "AGENT",
      designation: "Agent",
      email: "",
      status: "Active",
    },
    {
      id: 6,
      userName: "9000018013",
      displayName: "Leelavati",
      accessType: "User",
      org: "AGENT",
      designation: "agent",
      email: "",
      status: "Active",
    },
  ]);

  const handleAccessTypeChange = (userId, newAccessType) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, accessType: newAccessType } : user
      )
    );
  };

  return (
    <div className="p-4">
      {/* Add User Section */}
      <div className="flex flex-wrap gap-4 mb-6 w-[90%]  lg:pr-24 ">
        <div className="relative w-full sm:w-1/4">
          <label
            className={`absolute left-3 transition-all pointer-events-none px-1 bg-white ${
              isMobileFocused || mobile
                ? "text-sm -top-2 text-primary-light"
                : "text-gray-700 top-3"
            }`}
          >
            Mobile *
          </label>
          <input
            type="text"
            className="w-full rounded-md py-3 px-4 focus:outline-none bg-white border border-gray-400"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onFocus={() => setIsMobileFocused(true)}
            onBlur={() => setIsMobileFocused(mobile !== "")}
          />
        </div>
        <div className="relative w-full sm:w-1/4">
          <label
            className={`absolute left-3 transition-all pointer-events-none px-1 bg-white ${
              isDisplayNameFocused || displayName
                ? "text-sm -top-2 text-primary-light"
                : "text-gray-700 top-3"
            }`}
          >
            Display Name *
          </label>
          <input
            type="text"
            className="w-full rounded-md py-3 px-4 focus:outline-none bg-white border border-gray-400"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            onFocus={() => setIsDisplayNameFocused(true)}
            onBlur={() => setIsDisplayNameFocused(displayName !== "")}
          />
        </div>  
        {/* Dropdown Section */}
        <div className="relative rounded w-full  sm:w-1/6 rounded-md ">
          {/* Floating Label */}
          <label
            className={`absolute left-3 transition-all pointer-events-none px-1 bg-white ${
              isFocused || userType
                ? "text-sm -top-2 text-primary-light"
                : "text-gray-700 top-3"
            }`}
          >
            Bank Name *
          </label>

          {/* Dropdown */}
          <select
            className="w-full rounded-md py-3 px-4 focus:outline-none bg-white appearance-none border border-gray-400"
            value={userType}
            onChange={(e) => {
              setUserType(e.target.value);
              setIsOpen(false);
            }}
            onFocus={() => {
              setIsFocused(true);
              setIsOpen(true);
            }}
            onBlur={() => {
              setIsFocused(userType !== "");
              setIsOpen(false);
            }}
          >
            <option value="" hidden></option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>

          {/* Dropdown Icon */}
          <i
            className={`bx ${
              isOpen ?  "bxs-up-arrow":"bxs-down-arrow"
            } absolute top-4 right-2 text-gray-500 pointer-events-none transition-all text-xs`}
          ></i>
        </div>
        <button className="bg-primary text-white rounded px-4 py-2 font-semibold">
          Add User
        </button>
        <button className="bg-gray-200 rounded px-4 py-2 border-2 border-primary">
          Show Deleted Users
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4 w-full  lg:pr-18">
        <input
          type="text"
          placeholder="Search Here"
          className="w-full rounded py-2 px-3 border border-primary focus:outline-none w-1/1.5"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-4 border-b border-gray-300 text-left text-gray-600">#</th>
              <th className="py-4 px-4 border-b border-gray-300 text-left text-gray-600">User Name</th>
              <th className="py-4 px-4 border-b border-gray-300 text-left text-gray-600">Display Name</th>
              <th className="py-4 px-4 border-b border-gray-300 text-left text-gray-600">Access Type</th>
              <th className="py-4 px-4 border-b border-gray-300 text-left text-gray-600">Org</th>
              <th className="py-4 px-4 border-b border-gray-300 text-left text-gray-600">Designation</th>
              <th className="py-4 px-4 border-b border-gray-300 text-left text-gray-600">Email</th>
              <th className="py-4 px-4 border-b border-gray-300 text-left text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-300">
                <td className="py-4 px-4">{user.id}</td>
                <td className="py-4 px-4">{user.userName}</td>
                <td className="py-4 px-4">{user.displayName}</td>
                <td className="py-4 px-4">
                  <select
                    value={user.accessType}
                    onChange={(e) =>
                      handleAccessTypeChange(user.id, e.target.value)
                    }
                    className="w-full rounded-md py-3 px-4 focus:outline-none bg-white border border-gray-400 text-gray-600"
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>
                <td className="py-4 px-4">{user.org}</td>
                <td className="py-4 px-4">{user.designation}</td>
                <td className="py-4 px-4">{user.email}</td>
                <td className="py-4 px-4">
                  <span className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-bold">
                    <i className="bx bxs-circle text-green-800 text-xs mr-1"></i>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
