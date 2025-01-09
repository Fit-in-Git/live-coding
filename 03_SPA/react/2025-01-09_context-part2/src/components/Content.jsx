import { useCountActions } from "./NumberProvider";

const Content = () => {
  // 3. Consumer
  const { number, addOne, addFive, decrement } = useCountActions();
  return (
    <div>
      <p>{number}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={addFive}>+5</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Content;
