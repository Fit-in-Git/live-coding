import "./App.css";
import StyledButton from "./components/Button";
import ColoredText from "./components/ColoredText";
import MyCard from "./components/MyCard";
import MyComponent from "./components/MyComponent";
import StyledComponent from "./components/StyledComponent";
import StyledList from "./components/StyledList";

function App() {
  return (
    <div>
      <StyledList />
      <ColoredText />
      <MyComponent isHere={true} />

      <StyledComponent />
      <StyledButton red lime>
        Thank you
      </StyledButton>

      <StyledButton>Sale</StyledButton>

      <MyCard
        title="Camelion"
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVw8fPf1ZYOohud0tuOlZl5zCgmDF8-b7rw&s"
        content="The first Card"
      ></MyCard>

      <MyCard
        title="lion"
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSAYM3JUgicWNYj9xhpDD7ZO88ABaQPH51w&s"
        content="The second Card"
      ></MyCard>
    </div>
  );
}

export default App;

// EXAMPLE-1: StyledList.jsx (Inline Style)
// EXAMPLE-2: ColoredText.jsx / coloredTextStyle.module.css (Dynamic Color)
// EXAMPLE-3: MyComponent.jsx / myComponentStyle.module.css (ternary)

// styled-components => npm install styled-components
// import styled from "styled-components" => for every component that you want to use it
// EXAMPLE-1: StyledComponent.jsx
// EXAMPLE-2: Button.jsx
// EXAMPLE-3: MyCard.jsx
