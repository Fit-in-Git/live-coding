const StyledList = () => {
  const listStyle = {
    color: "green",
    fontSize: "33px",
    background: "yellow",
    listStyle: "none",
  };
  const x = {
    padding: "20px",
  };
  // If you want to have two different styles =>  so combine them!
  const combineStyles = { ...listStyle, ...x };
  return (
    <ul>
      <h2 style={{ color: "orange", fontSize: "22px" }}>Our New Laptops</h2>
      <li style={listStyle}>Sony</li>
      <li style={combineStyles}>Lenovo</li>
      <li style={{ ...listStyle, color: "red", fontWeight: "bold" }}>HP</li>
      <li style={{ ...listStyle, ...x }}>ASUS</li>
    </ul>
  );
};

export default StyledList;
