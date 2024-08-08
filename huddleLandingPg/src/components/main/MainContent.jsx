import { Button, Col, Image, Row } from "react-bootstrap";
import mainImg from "../../assets/images/illustration-mockups.svg";
import "./main.css";

const imgProperties = {
  src: mainImg,
  alt: "illustration mokups",
};

const buttonProps = {
  className: "rounded-pill mt-3",
  variant: "light",
};

const MainContent = () => {
  return (
    <main>
      <Row>
        <Col xs={12} lg={7}>
          <Image className="img-fluid" {...imgProperties} />
        </Col>
        <Col xs={12} lg={5}>
          <h1 className="text-light lh-base">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-light mt-4 lh-base px-1">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <Button {...buttonProps}>Register</Button>
        </Col>
      </Row>
    </main>
  );
};

export default MainContent;
