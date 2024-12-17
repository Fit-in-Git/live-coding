import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Layout from "./layout/Layout";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Layout>
  );
}

export default App;

// for SPA we need to install react-router
// - npm install react-router-dom

// - give BrowserRouter to your main.jsx
