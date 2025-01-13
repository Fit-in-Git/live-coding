import { useId } from "react";

const UserIdDisplay = () => {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>React</label>
      <input id={id} type="checkbox" />
    </>
  );
};

export default UserIdDisplay;
