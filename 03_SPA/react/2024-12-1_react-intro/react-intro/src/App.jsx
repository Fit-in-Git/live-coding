import "./App.css";
import logo from "./assets/messi.jpg";

import MyExample from "./MyExample";
//
/* */
function App() {
  // EXAMPLE-1
  const x = "Welcome to my Website";

  // EXAMPLE-2
  const cellphone = {
    brand: "Samsung",
    price: "700€",
    country: "Korea",
  };

  // EXAMPLE-3
  const isSignedUp = false;

  return (
    <div>
      {/* It's a comment in JSX */}
      {/* EXAMPLE-1 */}
      {x}

      {/* EXAMPLE-2 */}
      <div>
        <h3>{cellphone.brand}</h3>
        <p>{cellphone.country}</p>
      </div>
      {/* EXAMPLE-3 */}
      {isSignedUp ? <p>Done</p> : <h4>Failed</h4>}

      <p className={isSignedUp ? "welcome" : "failed"}>
        {isSignedUp ? "Welcome User" : "Please try again"}
      </p>

      <img src={logo} alt="Messi" />
      <MyExample />
    </div>
  );
}

export default App;
