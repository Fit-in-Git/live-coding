import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
  return (
    <>
      <span>
        <FontAwesomeIcon icon={faPhone} shake/>
      </span>
      0123456789
    </>
  );
};

export default ContactUs;
