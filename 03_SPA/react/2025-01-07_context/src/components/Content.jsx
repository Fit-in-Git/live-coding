import { useContext } from "react";
import { CountContext } from "./CounterProvider";

const Content = () => {
  // 3. Consumer
  // Without destructuring
  const context = useContext(CountContext);

  // With destructuring
  const { count, handleIncrement } = useContext(CountContext);

  return (
    <div>
      <p>The Count is: {context.count}</p>
      <button onClick={context.handleIncrement}>plus</button>
      <p>The Count is: {count}</p>
      <button onClick={handleIncrement}>plus</button>
    </div>
  );
};

export default Content;
