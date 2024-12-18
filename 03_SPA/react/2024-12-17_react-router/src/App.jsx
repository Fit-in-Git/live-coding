import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Layout from "./layout/Layout";
import ContactUs from "./components/ContactUs";
import routes from "./routes/routes";
import Parent from "./views/Parent";
import Child1 from "./views/Child1";
import Child2 from "./views/Child2";
import Home from "./views/Home";
import Products from "./components/Products";

function App() {
  return (
    <Layout>
      {/* IF WE HAVE NOT CHILDREN */}
      {/* <Routes>
        {routes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </Routes> */}

      {/* IF WE HAVE CHILDREN NESTED ROUTE */}
      <Routes>
        {routes.map((route) =>
          route.children ? (
            <Route key={route.id} {...route}>
              {route.children.map((child) => (
                <Route key={child.id} {...child} />
              ))}
            </Route>
          ) : (
            <Route key={route.id} {...route} />
          )
        )}
      </Routes>
      {/* OR LIKE HERE IF YOU DON'T HAVE routes.jsx */}
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-products" element={<Products />} />

        <Route path="/services" element={<Parent />}>
          <Route index element={<Home />} />
          <Route path="/services/serv1" element={<Child1 />} />
          <Route path="/services/serv2" element={<Child2 />} />
        </Route>
      </Routes> */}
    </Layout>
  );
}

export default App;

// Another Way

// function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//       </Routes>
//     </Layout>
//   );
// }
