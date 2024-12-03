import React, { createContext, useState } from 'react';

const ClickCountContext = createContext();

const ClickCountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ClickCountContext.Provider value={{ count, setCount }}>
      {children}
    </ClickCountContext.Provider>
  );
};

export { ClickCountProvider, ClickCountContext };
