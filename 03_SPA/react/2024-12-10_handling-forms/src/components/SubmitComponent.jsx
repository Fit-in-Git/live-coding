import { useState } from "react";

const SubmitComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const formDataHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API
      const response = await fetch("https://formpree.io/f/xovqznaq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Erfolg");
      } else {
        console.log("Fehler");
      }
    } catch (error) {
      console.log("You have Error", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={formDataHandler}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={formDataHandler}
      />
      <button type="submit">Click</button>
    </form>
  );
};

export default SubmitComponent;
