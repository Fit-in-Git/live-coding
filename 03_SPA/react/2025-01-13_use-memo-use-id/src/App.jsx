import { useState } from "react";
import "./App.css";
import ExpensiveComponent from "./components/ExpensiveComponent";
import UserIdDisplay from "./components/UserIdDisplay";
import UserIdForm from "./components/UserIdForm";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((x) => x + 1)}>Increment +</button>
      <ExpensiveComponent count={count} />

      <UserIdDisplay />
      <UserIdForm />
    </>
  );
}

export default App;
// EXAMPLE-1: useMemo

// EXAMPLE-2: useId
