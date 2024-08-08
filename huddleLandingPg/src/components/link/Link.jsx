/* eslint-disable react/prop-types */
import { Nav } from "react-bootstrap";
import "./link.css";

const classes = [
  "text-light",
  "rounded-circle",
  "border",
  "border-light",
  "p-2",
  "d-flex",
  "align-content-center",
  "justify-content-center",
];

const linkProps = {
  href: "./",
  className: [...classes],
  style: { fontSize: "0.8rem" },
};

const Link = ({ children }) => {
  return <Nav.Link {...linkProps}>{children}</Nav.Link>;
};

export default Link;
