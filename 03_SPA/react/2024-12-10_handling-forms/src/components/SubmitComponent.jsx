import { useState } from "react";

const SubmitComponent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const fromDataHandle = (e) => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  // fullName and email
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <input type="text" />
    </form>
  );
};

export default SubmitComponent;
