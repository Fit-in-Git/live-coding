import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  console.log(action);
  console.log(state);

  switch (action) {
    case "addOne":
      return { firstCounter: state.firstCounter + 1 };
    case "addFive":
      return { firstCounter: state.firstCounter + 5 };
    case "decrement":
      return { firstCounter: state.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CountReducer2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>count is {count.firstCounter}</p>
      <button onClick={() => dispatch("addOne")}>add one</button>
      <button onClick={() => dispatch("addFive")}>add five</button>
      <button onClick={() => dispatch("decrement")}>-1</button>
      <button onClick={() => dispatch("reset")}>RESET</button>
      <button onClick={() => dispatch("hallo")}>click</button>
    </div>
  );
};

export default CountReducer2;
