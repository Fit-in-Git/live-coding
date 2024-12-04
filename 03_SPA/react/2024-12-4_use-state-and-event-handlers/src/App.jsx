import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import EmailInput from "./components/EmailInput";
import Search from "./components/Search";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([
    { title: "react.js", price: "7000€", id: 1 },
    { title: "JavaScript", price: "3000€", id: 2 },
    { title: "CSS", price: "500€", id: 3 },
  ]);
  const removeHandler = (goalId) => {
    console.log("Removed", goalId);
    const removeProduct = products.filter((p) => p.id !== goalId); // 3 !== 3
    setProducts(removeProduct);

    // OR
    // setProducts(products.filter((p) => p.id !== goalId));
  };
  return (
    <div>
      {/* EXAMPLE-1 */}
      {/* <Counter /> */}

      {/* EXAMPLE-2 */}
      {/* <Counter2 /> */}

      {/* EXAMPLE-3 */}
      {/* <EmailInput /> */}

      {/* EXAMPLE-4 */}
      {/* <Search /> */}

      <h1>Our Courses</h1>
      {products.map((product) => {
        return (
          <Products
            ourProducts={product.title}
            ourPrice={product.price}
            onDelete={() => removeHandler(product.id)}
            key={product.id}
          />
        );
      })}
    </div>
  );
}

export default App;

// useState
