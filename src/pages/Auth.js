import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log("location", location);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter e-mail..." />
          <Form.Control className="mt-3" placeholder="Enter password..." />
          <Row className="mt-3">
            {isLogin ? (
              <Col className="d-flex justify-content-start align-items-center gap-2">
                <span className="ms-2">No account?</span>
                <NavLink to={REGISTRATION_ROUTE}>Signup</NavLink>
              </Col>
            ) : (
              <Col className="d-flex justify-content-start align-items-center gap-2">
                <span className="ms-2">Have account?</span>
                <NavLink to={LOGIN_ROUTE}>Login</NavLink>
              </Col>
            )}
            <Col className="d-flex justify-content-end align-items-center">
              <Button variant="outline-success">
                {isLogin ? "Login" : "Signup"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
