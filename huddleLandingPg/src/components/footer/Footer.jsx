/* eslint-disable react/jsx-key */
import { Navbar } from "react-bootstrap";
import Link from "../link/Link";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const iconList = [<ImFacebook />, <FaTwitter />, <FaInstagram />];

const Footer = () => {
  return (
    <footer>
      <Navbar className="justify-content-center gap-2">
        {iconList.map((icon, index) => (
          <Link key={index}>{icon}</Link>
        ))}
      </Navbar>
    </footer>
  );
};

export default Footer;
