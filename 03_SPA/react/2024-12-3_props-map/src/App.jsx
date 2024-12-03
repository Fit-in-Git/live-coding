import "./App.css";
import GoalItem from "./components/GoalItem";
import GoalItem2 from "./components/GoalItem2";
import GoalItem3 from "./components/GoalItem3";
// EXPLAIN: What is prop and why we should use it? stands for PROPERTIES
// Passing data from parent component to child component
// They are one-way from parent to child
//  props are read-only and cannot be modified by the child component
// AGAIN => props are used to pass information down to the components
function App() {
  // EXAMPLE-1: props
  const bookName = "How to learn React 😎";
  const bookPrice = "70€";

  // EXAMPLE-2: props
  const bookData = { title: "The Joy of Small Things", price: "9€" };

  // EXAMPLE-3: props
  let carName = "Ferrari";
  let carCountry = "Italy";

  // EXAMPLE-5: props with destructuring
  const fitInGit = "FbW D04";

  // EXAMPLE-6: map
  let movies = [
    { name: "World War Z", points: 93, id: 1 },
    { name: "The Dark Knight", points: 90, id: 2 },
    { name: "Spider-Man", points: 78, id: 3 },
    { name: "Poor Things", points: 85, id: 4 },
  ];
  return (
    <div>
      React
      {/* EXAMPLE-1 */}
      <GoalItem x={bookName} bookPrice={bookPrice} />
      {/* EXAMPLE-2 */}
      <GoalItem2 bookT={bookData.title} bookP={bookData.price} />
      {/* EXAMPLE-3 */}
      <GoalItem2 carN={carName} carC={carCountry} />
      {/* EXAMPLE-4:props */}
      <GoalItem k="T-Shirt" z={29.99} />
      {/* EXAMPLE-5: props with destructuring */}
      <GoalItem3 fitInGit={fitInGit} carLocation={carCountry} />
      {/* EXAMPLE-6: map */}
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              {movie.name} - {movie.points}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
