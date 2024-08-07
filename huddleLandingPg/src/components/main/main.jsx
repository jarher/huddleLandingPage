import { Button, Col, Image, Row } from "react-bootstrap";
import mainImg from "../../assets/images/illustration-mockups.svg";

const imgProperties = {
  src: mainImg,
  alt: "illustration mokups",
};

const Main = () => {
  return (
    <main>
      <Row>
        <Col xs={12}>
          <Image className="img-fluid" {...imgProperties} />
        </Col>
        <Col xs={12}>
          <h1 className="text-light">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-light">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <Button variant="light" style={{ color: "hsl(300, 69%, 71%)" }}>
            Register
          </Button>
        </Col>
      </Row>
    </main>
  );
};

export default Main;
