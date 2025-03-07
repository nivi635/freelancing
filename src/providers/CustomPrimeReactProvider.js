"use client"; // Required for Next.js App Router

import React from "react";
import { PrimeReactProvider } from "primereact/api";
import classNames from "classnames";

const Tailwind = {
  tabmenu: {
    root: "overflow-x-auto font-Inter",
    menu: {
      className: classNames(
        "flex m-0 p-0 list-none flex-nowrap",
        "bg-white border-solid border-gray-300 border-b-2",
        "outline-none no-underline text-base list-none"
      ),
    },
    menuitem: "mr-0",
    action: ({ context, parent }) => ({
      className: classNames(
        "cursor-pointer select-none flex items-center relative no-underline overflow-hidden",
        "border-b-2 p-5 font-bold rounded-t-lg ",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]",
        {
          "border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80":
            parent.state.activeIndex !== context.index,
          "bg-white border-primary-dark text-primary-dark dark:bg-gray-900 dark:border-primary-dark dark:text-primary":
            parent.state.activeIndex === context.index,
        }
      ),
      style: { top: "2px" },
    }),
    icon: "mr-2",
  },
};

export default function CustomPrimeReactProvider({ children }) {
  return (
    <PrimeReactProvider value={{ pt: Tailwind }}>
      {children}
    </PrimeReactProvider>
  );
}
