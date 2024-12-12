import Styles1 from "./components/Styles1";
import "./App.css";
import SassExample from "./components/SassExample";
import BootstrapExample from "./components/BootstrapExample";
import "bootstrap/dist/css/bootstrap.min.css";
import ExampleComponent from "./components/ExampleComponent";

function App() {
  return (
    <div>
      <Styles1 />
      <SassExample />
      <BootstrapExample />
      <ExampleComponent />
    </div>
  );
}

export default App;

// Styling

// EXAMPLE-1: Styles1.jsx (Inline styling and module external)
// EXAMPLE-2: Sass in react => npm i sass => SassExample.jsx and SassExampleStyle.scss
// EXAMPLE-3: Bootstrap => npm install react-bootstrap bootstrap
// EXAMPLE-4: Create your own component for styling
// - Create MyOwnStyle.jsx and MyStyle.css => import the css in jsx => for example => try it in SassExample.jsx
// - Create another component => ExampleComponent.jsx and import MyOwnStyle.jsx in it.

// NOTICE: npm run build => dist => all sass and bootstrap styles in normal css and now we have production ready version of your Website to deploy
