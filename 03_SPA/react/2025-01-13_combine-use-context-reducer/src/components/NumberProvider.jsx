import { createContext, useContext, useReducer } from "react";

// 1. createContext
const NumberContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return state + action.value;
    case "Decrement":
      return state - action.value;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
const NumberProvider = ({ children }) => {
  const [number, dispatch] = useReducer(reducer, initialState);

  return (
    // 2. provider
    <NumberContext.Provider value={{ number, dispatch }}>
      {children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;

export const useNumberActions = () => useContext(NumberContext);