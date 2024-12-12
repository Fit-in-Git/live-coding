import "../styles/MyStyle.css";
const MyOwnStyle = ({ children }) => {
  return <header className="my-styles">{children}</header>;
};

export default MyOwnStyle;
