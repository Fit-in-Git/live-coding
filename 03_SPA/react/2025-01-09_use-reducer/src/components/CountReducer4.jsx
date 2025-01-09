import { useReducer } from "react";
const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CountReducer4 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count is : {count}</h2>
      <h2>CountTwo is : {countTwo}</h2>

      <button onClick={() => dispatch({ type: "add", value: 17 })}>+17</button>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -1
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
      <button onClick={() => dispatchTwo({ type: "add", value: 20 })}>
        +20
      </button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>RESET</button>
    </div>
  );
};

export default CountReducer4;