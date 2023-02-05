import React from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import deviceImg from "../assets/device.png"; // ! Delete
import bigStar from "../assets/big-star.svg"; // ! Delete

const DevicePage = () => {
  const device = {
    id: 1,
    name: "iPhone 14",
    price: 30000,
    rating: 5,
    img: deviceImg,
  };
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Form className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default DevicePage;
