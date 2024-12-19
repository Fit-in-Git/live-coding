// import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const [isNavigate, setIsNavigate] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setIsNavigate(true);
  };

  return (
    <>
      <p>This is About Us Page</p>
      <button onClick={handleNav}>Click to navigate</button>
      {isNavigate && navigate("/services")}

      {/* <Link to="/">Go to Home Page</Link> */}
    </>
  );
};

export default AboutUs;
// NOTICE: useNavigate => used to navigate (move) between different pages or routes in your app

// EXAMPLE-2

// const example2 = ()=>{
//   const navigate = useNavigate();
//   const x = ()=> navigate("/");

//   return(<>
//   <p>Hallo</p>
//   <button onClick={x}>Go to Home</button>
//   </>)
// }

// export default example2;
