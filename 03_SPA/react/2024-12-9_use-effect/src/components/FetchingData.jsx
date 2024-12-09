import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import "../styles/styles.css";

const FetchingData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // async - await
  // axios => npm i axios
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setData(data.slice(0, 7));
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("You have error", error);
          setError("Please try again!");
          setIsLoading(false);
        });
    }, 4000);
  }, []);
  // first way
  //   if (error) {
  //     return <div>{error}</div>;
  //   }
  return (
    <div>
      {isLoading ? (
        <div className="spinner">
          <ClimbingBoxLoader color="green" size={30} />
        </div>
      ) : // second way
      error ? (
        <div className="error-message">{error}</div>
      ) : (
        <ul className="container">
          {data.map((item) => (
            <li className="card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchingData;

// 1. npm i react-spinners
// 2. import your spinner => for example => import { ClimbingBoxLoader } from "react-spinners";
// 3. <div> <ClimbingBoxLoader color="green" size={30} /> </div>

// Try different animation => https://www.davidhu.io/react-spinners/
