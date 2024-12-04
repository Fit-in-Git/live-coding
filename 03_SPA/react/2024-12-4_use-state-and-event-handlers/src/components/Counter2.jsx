import React, { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // if (count < 10) {
    //   setCount((prevValue) => prevValue + 1);
    // }

    // with ternary
    setCount((prevValue) => (prevValue < 10 ? prevValue + 1 : prevValue));
  };
  const decrement = () => {
    setCount((prevValue) => prevValue - 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={count <= 0}>
        -
      </button>
      <p>{count}</p>
    </div>
  );
};

export default Counter2;
