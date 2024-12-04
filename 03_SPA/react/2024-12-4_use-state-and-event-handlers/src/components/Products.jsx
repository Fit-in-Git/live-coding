const Products = (props) => {
  return (
    <div>
      <p>Product Name: {props.ourProducts}</p>
      <p>Product Price: {props.ourPrice}</p>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default Products;
