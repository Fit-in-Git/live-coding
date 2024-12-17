import { NavLink } from "react-router-dom";
import style from "../styles/navigation.module.css";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "About Us", to: "/about-us", id: 2 },
    { name: "Contact Us", to: "/contact-us", id: 3 },
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
                  isActive ? style.active : undefined
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
