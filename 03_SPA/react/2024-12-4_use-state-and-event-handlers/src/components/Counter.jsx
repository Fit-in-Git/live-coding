import { useState } from "react";
import "../styles/Counter.css";

// rafce
const Counter = () => {
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  const handleClick = () => {
    // setCount(count + 1);
    setCount((prevValue) => prevValue + 1);
  };

  const handleClick2 = () => {
    // setCount(count - 1);
    setCount((prevValue) => prevValue - 1);
  };

  const toggleBool = () => {
    setIsTrue((x) => !x); // !false
  };

  console.log("###################");
  return (
    <div className={`${isTrue ? "green" : "red"}`}>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClick2}>-</button>

      <p>{count}</p>
      <p>{isTrue.toString()}</p>
      <button onClick={toggleBool}>{isTrue.toString()}</button>
    </div>
  );
};

export default Counter;
