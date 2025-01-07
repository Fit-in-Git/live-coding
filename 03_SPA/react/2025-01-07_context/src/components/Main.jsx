import { useContext } from "react";
import { CountContext } from "./CounterProvider";
import Content from "./Content";

const Main = () => {
  // 3. Consumer
  const x = useContext(CountContext);

  const click = () => x.setCount((value) => value + 5);
  return (
    <div
      style={{
        background: x.isDarkMode ? "black" : "none",
        color: x.isDarkMode ? "white" : "black",
      }}
    >
      <p>Hey: {x.count}</p>
      <button onClick={click}>+5</button>
      <button onClick={x.switchDarkMode}>DarkMode</button>
      <button onClick={x.handleIncrement}>+2</button>

      <Content />
    </div>
  );
};

export default Main;
