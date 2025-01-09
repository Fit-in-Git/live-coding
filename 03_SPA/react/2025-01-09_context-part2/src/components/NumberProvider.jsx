import { useState, createContext, useContext } from "react";

// 1. createContext
/*export*/ const FirstExample = createContext();
const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(10);
  const myFunc = () => setNumber((x) => x * 20);

  // First Way
  //   const addOne = () => setNumber((x) => x + 1);
  //   const addTwo = () => setNumber((x) => x + 2);
  //   const addFive = () => setNumber((x) => x + 5);

  //  2. Provider
  // NOTICE: When you use second way, in value={{}} THERE IS NO FUNCTION NAMES => value={{ number, setNumber }}
  return (
    <FirstExample.Provider value={{ number, setNumber, myFunc }}>
      {children}
    </FirstExample.Provider>
  );
};

export default NumberProvider;

// First Way
// export const useCount = () => useContext(FirstExample);

// Second Way (Cleaner way)
export const useCountActions = () => {
  const setNum = useContext(FirstExample);
  const addOne = () => setNum.setNumber((x) => x + 1);
  const addTwo = () => setNum.setNumber((x) => x + 2);
  const addFive = () => setNum.setNumber((x) => x + 5);
  const decrement = () => setNum.setNumber((x) => x - 1);
  return { addOne, addTwo, addFive, decrement, number: setNum.number };
};
