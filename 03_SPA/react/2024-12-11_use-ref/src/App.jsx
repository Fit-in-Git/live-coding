import "./App.css";
import AccessBtn from "./components/AccessBtn";
import Counter from "./components/Counter";
import InputFocus from "./components/InputFocus";

function App() {
  return (
    <div>
      {/* <AccessBtn /> */}
      {/* <InputFocus /> */}
      <Counter />
    </div>
  );
}

export default App;

// useState() => re-render the component when state value updated or changed

// useRef():
// - Accessing DOM
// - Handling focus and so on

// useRef() => There is no re-render when its value changes

// EXAMPLE-1: AccessBtn.jsx (DOM access with react)
// EXAMPLE-2: InputFocus.jsx (automatically focus on an input)
// EXAMPLE-3: Counter.jsx (Handling previous state)
