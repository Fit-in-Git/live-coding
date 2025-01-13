import { useNumberActions } from "./NumberProvider";

const Content = () => {
  // 3. Consumer
  const { number, dispatch } = useNumberActions();
  const limit = number >= 100;

  return (
    <div>
      <p>The Number is: {number}</p>
      <button
        onClick={() => dispatch({ type: "Increment", value: 10 })}
        disabled={limit}
      >
        +10
      </button>
      <button onClick={() => dispatch({ type: "Increment", value: 2 })}>
        +2
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default Content;
