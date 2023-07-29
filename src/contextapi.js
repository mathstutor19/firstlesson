// MyContext.js
import React, { createContext, useState, useContext } from 'react';

// Context yaratish
const MyContext = createContext();

// Contextdan foydalanish uchun hook yaratish
export const useMyContext = () => useContext(MyContext);

// Context provider yaratish
export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(false);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};
