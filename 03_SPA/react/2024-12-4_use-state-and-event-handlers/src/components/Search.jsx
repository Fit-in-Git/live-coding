import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form>
      <label htmlFor="search">Search:</label>
      <input id="search" onChange={handleInputChange}/>
      <p>{inputValue}</p>
    </form>
  );
};

export default Search;
