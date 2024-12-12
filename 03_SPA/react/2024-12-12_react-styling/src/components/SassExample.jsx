import "../styles/SassExampleStyle.scss";
import MyOwnStyle from "./MyOwnStyle";
const SassExample = () => {
  return (
    <div>
      <p>Hello</p>
      <button className="btn">Click</button>
      <MyOwnStyle>
        <p>I am ready</p>
      </MyOwnStyle>
    </div>
  );
};

export default SassExample;
