import AboutUs from "../components/AboutUs";
import BlogPage from "../components/BlogPage";
import Blogs from "../components/Blogs";
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
  { path: "/blog", element: <BlogPage />, id: 6 },
  { path: "/blog-page/:id", element: <Blogs />, id: 7 },

  { path: "*", element: <NotFound />, id: 8 },
];

export default routes;
// :id => it makes our id dynamic
// you can choose another names except id, so no problem
