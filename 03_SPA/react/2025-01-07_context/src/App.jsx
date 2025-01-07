import "./App.css";
import CounterProvider from "./components/CounterProvider";
import Main from "./components/Main";

function App() {
  return (
    <CounterProvider>
      <Main />
    </CounterProvider>
  );
}

export default App;
// CONTEXT:
// When you use context =>
// 1. create new component (e.g CounterProvider.jsx)
// 2. in CounterProvider => createContext / provider (We make our data public)
// 3. consumer for each component that use the data from CounterProvider

// WITH PROPS
// PROPS DRILLING
// function App() {
//   const [count, setCount] = useState(0);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const switchDarkMode = () => {
//     setIsDarkMode((prev) => !prev);
//   };

//   const handleIncrement = () => {
//     setCount((x) => x + 2);
//   };

//   return (
//     <>
//       <button onClick={switchDarkMode}>Click</button>
//       <button onClick={handleIncrement}>Count</button>
//       <p>{count}</p>
//       <Content count={count} switchDarkMode={switchDarkMode} isDarkMode={isDarkMode}/>

//     </>
//   );
// }

// Content.jsx
// import ContentChild from "./ContentChild";

// const Content = ({ count, switchDarkMode, isDarkMode }) => {
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={switchDarkMode}>Switch</button>
//       <ContentChild isDarkMode={isDarkMode} />
//     </div>
//   );
// };

// export default Content;

// ContentChild.jsx
// const ContentChild = ({ isDarkMode }) => {
//   return <div>ContentChild</div>;
// };

// export default ContentChild;
