import { useState } from "react";

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <p>Input: {inputValue}</p>
    </div>
  );
};

export default ControlledInput;
