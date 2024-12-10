import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 10) {
      setCount((x) => x + 1);
    }
  };

  const decrement = () => {
    setCount((x) => x - 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment} disabled={count >= 10}>
        Increment +
      </button>
      <button onClick={decrement} disabled={count <= 0}>
        Decrement -
      </button>
      {/* This is Conditional statement with logical && operator */}
      {/* if count equals 10 => the p tag will render, otherwise it doesn't render anything  */}
      {/* This is the content (<p></p>) that will be rendered if the condition (count === 10) is true */}
      {count === 10 && (
        <p style={{ color: "red" }}>You cannot order more than 10 Laptops</p>
      )}
      {count === 0 && <p style={{color: "orange", fontWeight: "bold"}}>you cannot order less than 0 Laptops</p>}
    </div>
  );
};

export default Counter;
