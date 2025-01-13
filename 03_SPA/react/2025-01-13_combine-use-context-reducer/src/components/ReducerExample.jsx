import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return state + action.value;

    case "Minus":
      return state - action.value;

    case "Reset":
      return initialState;

    default:
      return state;
  }
};
const ReducerExample = () => {
  const [number, dispatch] = useReducer(reducer, initialState);
  const x = number <= 0;
  return (
    <div>
      <h4>The Number is {number}</h4>
      <button onClick={() => dispatch({ type: "Add", value: 1 })}>+1</button>
      {/* <button onClick={() => dispatch({ type: "Add", value: 4 })}>+4</button> */}
      <button
        onClick={() => dispatch({ type: "Minus", value: 1 })}
        disabled={x}
      >
        -1
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "XX", value: 1 })}>xx</button>
    </div>
  );
};

export default ReducerExample;
