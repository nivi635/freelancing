"use client"; // Required for Next.js App Router

import React from "react";
import { PrimeReactProvider } from "primereact/api";
import classNames from "classnames";

const Tailwind = {
  tabmenu: {
    root: "overflow-x-auto font-sans",
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
          "bg-white border-primary-dark text-primary dark:bg-gray-900 dark:border-primary-dark dark:text-primary":
            parent.state.activeIndex === context.index,
        }
      ),
      style: { top: "2px" },
    }),
    icon: "mr-2",
  },inputtext: {
    root: ({ props, context }) => ({
        className: classNames(
            'm-0',
            'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border transition-colors duration-200 appearance-none rounded-lg',
            {
                "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgb(45 55 72)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]":
                    !context.disabled,
                'hover:border-primary': !props.invalid && !context.disabled,
                'opacity-60 select-none pointer-events-none cursor-default': context.disabled,
                'border-gray-300 dark:border-primary': !props.invalid,
                'border-red-500 hover:border-red-500/80 focus:border-red-500':
                    props.invalid && !context.disabled,
                'border-red-500/50': props.invalid && context.disabled,
            },
            {
                'text-lg px-4 py-4': props.size === 'large',
                'text-xs px-2 py-2': props.size === 'small',
                'p-3 text-base': !props.size || typeof props.size === 'number'
            },
            {
                'pl-8': context.iconPosition === 'left',
                'pr-8': props.iconPosition === 'right'
            }
        ),
    }),
},
};

export default function CustomPrimeReactProvider({ children }) {
  return (
    <PrimeReactProvider value={{ pt: Tailwind }}>
      {children}
    </PrimeReactProvider>
  );
}
