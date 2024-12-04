import { useState } from "react";

const EmailInput = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const myEmail = (e) => {
    const myInput = e.target.value;
    if (!myInput.includes("@")) {
      setErrorMessage("Your Input is not valid 💔");
    } else {
      setErrorMessage("Welcome 😋");
    }
  };
  return (
    <div>
      <input type="email" placeholder="Enter your E-Mail..." onBlur={myEmail}/>
      <p>{errorMessage}</p>
    </div>
  );
};

export default EmailInput;
