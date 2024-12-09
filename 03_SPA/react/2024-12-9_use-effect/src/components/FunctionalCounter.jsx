// rafce

import { useEffect, useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("It Works 😺");
  }, []);
  // [] => It works just one time (at very first time)
  // [count] => It works at very first time and when count is updated
  // [count, name] => you can have more dependencies

  return (
    <div>
      <p>You Clicked: {count}</p>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click me
      </button>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default FunctionalCounter;

// Component's lifecycle => Three main phase
// Component Did Mount (CDM)
// Component Did Update (CDU)
// Component will Unmount (CWUM)

// How to control the life cycle => useEffect
