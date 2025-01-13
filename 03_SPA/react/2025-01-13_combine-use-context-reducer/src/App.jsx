import "./App.css";
import Content from "./components/Content";
import NumberProvider from "./components/NumberProvider";
import ReducerExample from "./components/ReducerExample";

function App() {
  return (
    <NumberProvider>
      {/* <ReducerExample /> */}
      <Content />
    </NumberProvider>
  );
}

export default App;
