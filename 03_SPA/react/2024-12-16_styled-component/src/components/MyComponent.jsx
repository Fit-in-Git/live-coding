import y from "../styles/myComponentStyle.module.css";
import StyledButton from "./Button";
const MyComponent = ({ isHere }) => {
  return <div className={isHere ? y.highlight : y.normal}>MyComponent
  <StyledButton lime>Click</StyledButton>
  </div>;
};

export default MyComponent;
