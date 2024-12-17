import { useState } from "react";
import styling from "../styles/coloredTextStyle.module.css";

const ColoredText = () => {
  const [enteredColor, setEnteredColor] = useState("");

  const updateColor = (e) => {
    setEnteredColor(e.target.value);
  };
  return (
    <div>
      <input className={styling.myInput} style={{backgroundColor: enteredColor}} onChange={updateColor} />
      <p style={{ color: enteredColor }}>Change the Color</p>
    </div>
  );
};

export default ColoredText;
