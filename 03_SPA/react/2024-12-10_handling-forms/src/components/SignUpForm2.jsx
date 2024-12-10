import { useState } from "react";

const SignUpForm2 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const formHandler = (e) => {
    // clone or copy the object
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="FirstName..."
        name="firstName"
        value={formData.firstName}
        onChange={formHandler}
      />
      <input
        type="text"
        placeholder="LastName..."
        name="lastName"
        value={formData.lastName}
        onChange={formHandler}
      />
      <input
        type="email"
        placeholder="E-Mail..."
        name="email"
        value={formData.email}
        onChange={formHandler}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SignUpForm2;
