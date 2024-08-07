import { Col, Image, Row } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";

const logoProperties = {
  src: logo,
  alt: "image logo",
  className: "img-fluid",
};

const Header = () => {
  return (
    <header>
      <Row>
        <Col xs={4}>
          <Image {...logoProperties} />
        </Col>
      </Row>
    </header>
  );
};

export default Header;
