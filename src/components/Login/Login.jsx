"use client";
import React, { useState } from "react";
import { InputOtp } from "primereact/inputotp";
import Image from "next/image";
import InputFloating from "../InputFloating";

export default function Login() {
  const [pin, setPin] = useState("");
  const [mobile, setMobile] = useState("");

  const handleMobileChange = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10);
    setMobile(cleaned);
  };

  const handleLogin = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ mobile, pin })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login success!");
        // redirect to dashboard
        window.location.href = "/dashboard";
      } else {
        alert("Login failed: " + data.message);
      }
    } catch (error) {
      alert("Error connecting to backend.");
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url("/backgrounds/paper-texture.jpg")` }}
    >
      <div className="w-full max-w-sm p-6 relative">
        <span className="absolute top-0 right-16 w-14 h-14 bg-blue-500 shadow-lg rounded-full "></span>
        <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center justify-center gap-4">
          <Image
            src={"/capinexLogo.png"}
            height={150}
            width={150}
            alt="Capinex Logo"
          />
          <h6 className="text-blue-900 text-lg font-semibold mt-2 mb-2">
            Sign In
          </h6>
          <InputFloating
            label={"Mobile"}
            className=" w-full mb-2"
            value={mobile}
            onChange={(value) => handleMobileChange(value)}
          />
          <InputOtp
            value={pin}
            onChange={(e) => setPin(e.value)}
            integerOnly
            mask
          />
          <button
            className="bg-primary rounded-md w-full text-center text-white p-2"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="text-xs text-center">
            If you have trouble logging into your tenancy please contact
            Adminstrator
          </p>
        </div>
      </div>
    </div>
  );
}
