import styled from "styled-components";
const StyledComponent = () => {
  const H2 = styled.h2`
    color: lime;
  `;

  const MyBtn = styled.button`
    background-color: #059669;
    color: white;
    border: none;
    padding: 2em;
    cursor: pointer;
    &:hover {
      background-color: #065f46;
    }
  `;
  return (
    <div>
      <H2>Hello</H2>
      <MyBtn>Click me</MyBtn>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, odit?</p>
      <MyBtn>Order</MyBtn>
    </div>
  );
};

export default StyledComponent;
