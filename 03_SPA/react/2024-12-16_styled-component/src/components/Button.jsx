import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.3em;
  background-color: orange;
  background-color: ${(props) => (props.red && "red") || "orange"};
  background-color: ${({ red }) => (red && "red") || "orange"};
  background-color: ${({ red, lime }) =>
    (red && "red") || (lime && "lime") || "orange"};
  background-color: ${({ red, lime }) =>
    red ? "red" : lime ? "lime" : "orange"};
`;

export default StyledButton;

// export const StyledButton = styled.button`
//   padding: 0.3em;
//   background-color: orange;
//   background-color: ${(props) => (props.red && "red") || "orange"};
//   background-color: ${({ red }) => (red && "red") || "orange"};
//   background-color: ${({ red, lime }) =>
//     (red && "red") || (lime && "lime") || "orange"};
//   background-color: ${({ red, lime }) =>
//     red ? "red" : lime ? "lime" : "orange"};
// `;

// with if-else
// background-color: ${({ red, lime }) => {
//     if(red){
//         return "red"
//     }else if (lime){
//         return "lime";
//     }else{
//         return "orange"
//     }
// }
