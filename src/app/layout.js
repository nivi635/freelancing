import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomPrimeReactProvider from "@/providers/CustomPrimeReactProvider";

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
    <MyProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-auto`}>
          <CustomPrimeReactProvider>
          <DashboardWrapper>
            {children}
          </DashboardWrapper>
          </CustomPrimeReactProvider>
        </body>
      </html>
    </MyProvider>
  );
}

function DashboardWrapper({ children }) {
  return (
    <div className="flex min-h-screen w-full overflow-auto">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main content dynamically adjusted using Tailwind */}
      <main className="flex1 w-full flex flex-col transition-all duration-300 ml-16 lg:ml-64 ">
        <Header />
        <div className="p-4 flex-1">{children}</div>
        <Footer />
      </main>
      <button className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full">
       Show Chat
  </button> 
      
    </div>
  );
}
