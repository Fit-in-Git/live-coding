import { useId } from "react";

const UserIdForm = () => {
  const id = useId();
  



  return (
    <form>
      <label htmlFor={`${id}-firstName`}>First Name:</label>
      <input id={`${id}-firstName`} />
      <label htmlFor={`${id}-lastName`}>Last Name:</label>
      <input id={`${id}-lastName`} />

      <label htmlFor={`${id}-email`}>Email:</label>
      <input id={`${id}-email`}  type="email" />
      <label htmlFor={`email-${id}`}>repeat your email:</label>
      <input id={`email-${id}`} type="email" />

      <label htmlFor="password">Password:</label>
      <input id="password" type="password" />
    </form>
  );
};

export default UserIdForm;
// PREFIX SUFFIX
