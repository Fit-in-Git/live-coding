import { Link, Outlet } from "react-router-dom";

const Parent = () => {
  const items = [
    { name: "Service1", to: "/services/serv1", id: 1 },
    { name: "Service2", to: "/services/serv2", id: 2 },
  ];
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </nav>
  );
};

export default Parent;
