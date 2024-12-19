import { NavLink } from "react-router-dom";
import style from "../styles/navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "About Us", to: "/about-us", id: 2 },
    { name: "Contact Us", to: "/contact-us", id: 3 },
    { name: "Products", to: "/our-products", id: 4 },
    { name: "Services", to: "/services", id: 5 },
    { name: "Blogs", to: "/blog", id: 6 },
  ];

  return (
    <nav>
      <ul className={style.navList}>
        {items.map((item) => {
          return (
            <li key={item.id} className={style.navItem}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  clsx(style.navLink, { [style.active]: isActive })
                }
              >
                {item.name}
              </NavLink>

              {/* OR Inline */}
              {/* <NavLink
                to={item.to}
                className={style.navLink}
                style={({ isActive }) => ({
                  color: isActive ? "green" : "none",
                  borderBottom: isActive ? "2px solid red" : "none",
                })}
              >
                {item.name}
              </NavLink> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

// clsx => use more classes in className
// - npm i clsx
// - import clsx from "clsx";
