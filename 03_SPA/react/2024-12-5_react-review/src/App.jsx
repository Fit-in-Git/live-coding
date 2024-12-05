import "./App.css";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import ammar from "./assets/12.jpg";
import Lamp from "./components/Lamp";
// function for component
function App() {
  // user Array
  const userProfile = [
    {
      fName: "Felix",
      id: 1,
    },
    {
      fName: "Ash",
      id: 2,
    },
  ];

  let hobby = " Digital Creating";

  return (
    <>
      {/* component 1 including car comp */}
      <Comp1 fName={userProfile[0].fName} />
      <h1>userProfile</h1>
      {/* Map through user Array and display in browser */}
      <ul>
        {userProfile.map((user) => {
          return <li key={user.id}>{user.fName}</li>;
        })}
      </ul>

      <div>
        <Comp2 hobby={hobby} />
      </div>

      <img src={ammar} alt="" />
      <Lamp />
    </>
  );
}

export default App;
