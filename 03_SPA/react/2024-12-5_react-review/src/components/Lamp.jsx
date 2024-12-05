import { useState } from "react";

const Lamp = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const toggleLamp = () => {
    setIsLightOn((prevValue) => !prevValue);
  };
  return (
    <div>
      <button onClick={toggleLamp}>{isLightOn ? "Turn Off" : "Turn On"}</button>
    </div>  );
};
export default Lamp;
