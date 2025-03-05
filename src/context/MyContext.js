"use client";

import { createContext, useContext, useState } from 'react';



const MyContext = createContext();


export const MyProvider = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState('Dashboard');

  return (
    <MyContext.Provider value={{ headerTitle, setHeaderTitle }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
