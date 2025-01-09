import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  console.log(action);
  console.log(state);

  switch (action.type) {
    case "add":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "add2":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CountReducer3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
 


  return (
    <div>
      <p>first count is {count.firstCounter}</p>
      <p>second count is {count.secondCounter}</p>

      <button onClick={() => dispatch({ type: "add", value: 17 })}>+17</button>
      <button onClick={() => dispatch({ type: "add", value: 4 })}>+4</button>

      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 10 })}>
        -10
      </button>

      <button onClick={() => dispatch({ type: "add2", value: 3 })}>+3</button>

      <button onClick={() => dispatch({ type: "decrement2", value: 7 })}>
        -7
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CountReducer3;
