import { useEffect, useRef } from "react";

// useRef in this example => automatically focus
const InputFocus = () => {
  // useRef => return an object => {current: undefined}
  const inputRef = useRef();

  useEffect(() => {
    // inputRef.current => give access to DOM
    // focus() => is a method => focus on the input element
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default InputFocus;


