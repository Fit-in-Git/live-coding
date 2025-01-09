import { useReducer, useState } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(action);
  console.log(state);

  switch (action) {
    case "addOne":
      return state + 1;
    case "addFive":
      return state + 5;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CountReducer1 = () => {
  //   const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);

  //   const addOne = () => setCount((x) => x + 1);
  //   const addFive = () => setCount((x) => x + 5);
  //   const decrement = () => setCount((x) => x - 1);

  return (
    <div>
      <p>count is {count}</p>
      <button onClick={() => dispatch("addOne")}>add one</button>
      <button onClick={() => dispatch("addFive")}>add five</button>
      <button onClick={() => dispatch("decrement")}>-1</button>
      <button onClick={() => dispatch("reset")}>RESET</button>
      <button onClick={() => dispatch("hallo")}>click</button>
    </div>
  );
};

export default CountReducer1;

// useReducer: very similar to useState, but it's for state management
// If we have more states => it's better to use useReducer

// const x = "Pink";
// switch (x) {
//   case "Red":
//     console.log(1);
//     break;

//   case "Green":
//     console.log(2);
//     break;

//   case "Yellow":
//     console.log(3);
//     break;

//   default:
//     console.log("No Color");
//     break;
// }

// if (x === "Red") {
//   console.log(1);
// } else if (x === "Green") {
//   console.log(2);
// } else if (x === "Yellow") {
//   console.log(3);
// } else {
//   console.log("No Color");
// }
