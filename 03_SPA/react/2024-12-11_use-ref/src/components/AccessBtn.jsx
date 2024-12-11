import { useRef } from "react";

const AccessBtn = () => {
  // useRef => returns an object => with one property => current
  // null => is initial value
  const buttonRef = useRef(null);
  const buttonRef2 = useRef(null);

  console.log("#####################################"); // There is no re-render (just at very first time)

  console.log(buttonRef); // {current: null}
  const handleClick = () => {
    buttonRef.current.style.backgroundColor = "blue";
    buttonRef.current.style.color = "white";
    // OR
    buttonRef.current.style.cssText = `background-color: orange; color: blue`;
  };

  const handleClick2 = () => {
    buttonRef2.current.style.cssText = `background-color: black; color: red`;
  };
  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>
        Click to Style
      </button>
      <button ref={buttonRef2} onClick={handleClick2}>
        Click
      </button>
    </div>
  );
};

export default AccessBtn;

// const button = document.getElementById("myBtn");
// button.addEventListener("click",()=>button.style.background = "blue")
