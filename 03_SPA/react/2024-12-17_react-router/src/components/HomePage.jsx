// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const HomePage = () => {
  return (
    <>
      <p>This is Home Page</p>
      <span>
        <FontAwesomeIcon icon={faAirbnb} /> 
        <FontAwesomeIcon icon={faSpinner} spin/>

      </span>
      {/* <Link to="/about-us">Go to about us</Link> */}
    </>
  );
};

export default HomePage;
