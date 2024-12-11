import { useEffect, useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const previousValue = useRef();

  useEffect(() => {
    previousValue.current = count;
  }, [count]);

  console.log("hello 😊");
  const increment = () => {
    setCount((x) => x + 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <p>useState: {count}</p>
      <p>useRef: {previousValue.current}</p>
    </div>
  );
};

export default Counter;

// Initial rendering:
// - count = 0;
// - previousValue = undefined

// track the current and previous values
// Why i need this?
// - User is required to enter a password and confirmation password. check if both passwords match
// - Online text editors (like google docs), users have ability to undo or redo actions.
// - Handling Animation
// - On Shopping Website, if the price of product changes, the site might show a message like Sales or Price Dropped
// The Website needs to compare the old price (previous value) with new price.
