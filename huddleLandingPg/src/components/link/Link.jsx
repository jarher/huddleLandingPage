/* eslint-disable react/prop-types */
import { Nav } from "react-bootstrap";

const classNames = [
  "text-light",
  "rounded-circle",
  "border",
  "border-light",
  "p-2",
  "d-flex",
  "align-content-center",
  "justify-content-center",
];
const Link = ({ children }) => {
  return (
    <Nav.Link href="./" className={[...classNames]}>
      {children}
    </Nav.Link>
  );
};

export default Link;
