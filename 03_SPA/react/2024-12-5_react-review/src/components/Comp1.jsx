import Car from './Car.jsx'


const Comp1 = (props) => {
  return (
    <div>
    <Car />
   
   
      <p>Name:{props.fName}</p>
    </div>
  );
};

export default Comp1;
