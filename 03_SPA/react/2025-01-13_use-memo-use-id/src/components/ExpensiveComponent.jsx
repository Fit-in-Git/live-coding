import { useMemo, useState } from "react";

const ExpensiveComponent = ({ count }) => {
  const [number, setNumber] = useState(10);
  const expensiveCalculation = useMemo(() => {
    let result = 0;
    for (let i = 0; i < count * 1000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  const myFunc = () => {
    setNumber((x) => x + 5);
  };

  return (
    <div>
      <p>count: {count}</p>
      <p>The sum is : {expensiveCalculation}</p>
      {number}
      <button onClick={myFunc}>ff</button>
    </div>
  );
};

export default ExpensiveComponent;
// useMemo => used to memoized (or cache)(Zwichenspeicher) for the result of expensiveCalculation 
