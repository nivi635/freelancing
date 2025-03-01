import React from 'react';
import Footer from './Footer';
export default function Dashboard() {
  return (
    <div>
    <div className="flex-1 p-6">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <div className="flex items-center">
            <a className="text-blue-500 mr-4" href="#">Tutorial</a>
            <a className="text-blue-500 mr-4" href="#">EMI Calculator</a>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full">NO LIVE CALL</button>
            <i className="fas fa-bell text-gray-700 ml-4"></i>
            <i className="fas fa-user-circle text-gray-700 ml-4"></i>
          </div>
        </div>
        <p className="mb-6 text-gray-600 italic">
          <i className="pi pi-lightbulb" style={{ color: 'yellow' }}></i> The only way to do great work is to love what you do - Steve Jobs
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Disbursement By Bank */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Disbursement By Bank</h3>
            <select className="border border-gray-300 rounded p-2">
              <option>Jan-2025</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <img alt="Disbursement Icon" className="mb-4" height="100" src="https://storage.googleapis.com/a1aa/image/yBPWOOJ4IeqXFOHXy0Kd7ncB25gU4Do4pXHVDNNY0gY.jpg" width="100" />
            <p>No data yet, work in progress</p>
          </div>
        </div>

        {/* Current Backend Processing By Status */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Current Backend Processing By Status</h3>
            <select className="border border-gray-300 rounded p-2">
              <option>Personal Loan</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <img alt="Processing Icon" className="mb-4" height="100" src="https://storage.googleapis.com/a1aa/image/0ihWxazSHBqQO-U3hVvCQQL4k-z6iLVWIqMSmG-UoBU.jpg" width="100" />
            <p>No information available at this time</p>
          </div>
        </div>

        {/* Top 5 Performers and Top 5 Fat Leads */}
        <div className="bg-white p-4 rounded-lg shadow ">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Top 5 Performers</h3>
            <div className="grid grid-cols-5 gap-4">
              {/* Performer Items */}
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img alt={`Performer ${index + 1}`} className="mb-2 rounded-full" height="50" src="https://storage.googleapis.com/a1aa/image/1h_T22EZbHSF-pY3kUX7bZPlJVl4OLyfI83cfWEavvE.jpg" width="50" />
                  <p>Stay tuned</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Top 5 Fat Leads</h3>
            <div className="grid grid-cols-5 gap-4">
              {/* Lead Items */}
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img alt={`Lead ${index + 1}`} className="mb-2 rounded-full" height="50" src="https://storage.googleapis.com/a1aa/image/fwmqRZthBB1FV5kQbYY84mcOTwgnhHlZhnEaiRaD6kQ.jpg" width="50" />
                  <p>Stay tuned</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Backend Processing By Bank */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Current Backend Processing By Bank</h3>
          <div className="flex flex-col items-center">
            <img alt="Processing By Bank Icon" className="mb-4" height="100" src="https://storage.googleapis.com/a1aa/image/K0Au0uuTit84KTitHPbCcYfuA-RsGcJ8CegUb_fxSPA.jpg" width="100" />
            <p>No information available at this time</p>
          </div>
        </div>
      </div>
      <button className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full">
       Show Chat
  </button> 
    </div>
    <Footer />
    </div>
  );
}
