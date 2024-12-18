import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import HomePage from "../components/HomePage";
import NotFound from "../components/NotFound";
import Products from "../components/Products";
import Child1 from "../views/Child1";
import Child2 from "../views/Child2";
import Parent from "../views/Parent";

const routes = [
  { path: "/", element: <HomePage />, id: 1 },
  { path: "/about-us", element: <AboutUs />, id: 2 },
  { path: "/contact-us", element: <ContactUs />, id: 3 },
  { path: "/our-products", element: <Products />, id: 4 },
  {
    path: "/services",
    element: <Parent />,
    children: [
      { path: "/services/serv1", element: <Child1 />, id: 11 },
      { path: "/services/serv2", element: <Child2 />, id: 12 },
    ],
    id: 5,
  },

  { path: "*", element: <NotFound />, id: 6 },
];

export default routes;
