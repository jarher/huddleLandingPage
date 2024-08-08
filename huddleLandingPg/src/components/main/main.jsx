import { Button, Col, Image, Row } from "react-bootstrap";
import mainImg from "../../assets/images/illustration-mockups.svg";
import "./main.css";

const imgProperties = {
  src: mainImg,
  alt: "illustration mokups",
};

const headingProps = {
  className: "text-light lh-base",
  style: { fontWeight: "600", fontStyle: "normal" },
};

const paragraphProps = {
  className: "text-light mt-4 lh-base px-1",
  style: {
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "1.1rem",
  },
};

const buttonProps = {
  size: "sm",
  className: "rounded-pill mt-3 p-2 shadow-sm",
  variant: "light",
  style: { color: "hsl(257, 40%, 49%)" },
};

const Main = () => {
  return (
    <main>
      <Row>
        <Col xs={12} lg={7}>
          <Image className="img-fluid" {...imgProperties} />
        </Col>
        <Col xs={12} lg={5}>
          <h1 {...headingProps}>Build The Community Your Fans Will Love</h1>
          <p {...paragraphProps}>
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

export default Main;
