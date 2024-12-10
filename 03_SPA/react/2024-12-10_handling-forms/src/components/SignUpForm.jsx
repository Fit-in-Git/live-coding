import { useState } from "react";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const x = {
      fName: firstName,
      lName: lastName,
      email: email,
    };
    console.log(x);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="FirstName..."
        value={firstName}
        onChange={firstNameHandler}
      />
      <input
        type="text"
        placeholder="LastName..."
        value={lastName}
        onChange={lastNameHandler}
      />
      <input
        type="email"
        placeholder="E-Mail..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SignUpForm;
