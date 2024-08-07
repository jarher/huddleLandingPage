/* eslint-disable react/prop-types */
import Image from "react-bootstrap";

const Img = ({ styles, url }) => {
  return <Image src={url} {...styles} />;
};

export default Img;
