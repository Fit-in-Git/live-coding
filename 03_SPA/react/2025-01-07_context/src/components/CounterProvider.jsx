import { createContext, useState } from "react";

// 1. createContext (The Context)
export const CountContext = createContext();
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleIncrement = () => {
    setCount((x) => x + 2);
  };
  // 2. PROVIDER
  return (
    <CountContext.Provider
      value={{ count, switchDarkMode, handleIncrement, isDarkMode, setCount }}
    >
      {children}
    </CountContext.Provider>
  );
};

export default CounterProvider;

