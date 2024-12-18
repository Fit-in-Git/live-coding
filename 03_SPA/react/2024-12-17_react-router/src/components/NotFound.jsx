import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>404 NotFound</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
