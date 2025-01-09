import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import NumberProvider from "./components/NumberProvider";

function App() {
  return (
    <NumberProvider>
      <Header />
      <Main />
    </NumberProvider>
  );
}

export default App;
