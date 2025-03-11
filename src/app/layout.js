import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomPrimeReactProvider from "@/providers/CustomPrimeReactProvider";
import DashboardWrapper from "@/components/Wrappers/DashboardWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CRM Application",
  description: "Version 2",
};

import { MyProvider } from '../context/MyContext';

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-auto`}>
        <MyProvider>
          <CustomPrimeReactProvider>
          <DashboardWrapper>
            {children}
          </DashboardWrapper>
          </CustomPrimeReactProvider>
          </MyProvider>
        </body>
      </html>
  
  );
}

