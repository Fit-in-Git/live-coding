import "./App.css";
import ControlledInput from "./components/ControlledInput";
import Counter from "./components/Counter";
import SignUpForm from "./components/SignUpForm";
import SignUpForm2 from "./components/SignUpForm2";

function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <ControlledInput /> */}
      {/* <SignUpForm /> */}
      <SignUpForm2 />
    </div>
  );
}

export default App;

// EXAMPLE-1: Counter.jsx (review useState)
// EXAMPLE-2: ControlledInput.jsx (Controlled Components)
// EXAMPLE-3: SignUpForm.jsx (Multiple Inputs)
// EXAMPLE-4: SignUpForm2.jsx (Handling Multiple states and inputs in one)
// EXAMPLE-5: SubmitComponent.jsx (Making API)
