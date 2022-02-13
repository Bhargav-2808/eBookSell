import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import "./register.css";
function Register() {
  return (
    <>
      <Container className="mt-2">
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <h2>Login or create an Acoount</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Form className="">
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control type="email" />
                </Col>
                <Col>
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control type="email" />
                </Col>
              </Row>

              <Form.Label>Email address *</Form.Label>
              <Form.Control type="email" />
              <Row>
                <Col>
                  <Form.Label>Password *</Form.Label>
                  <Form.Control type="password" />
                </Col>

                <Col>
                  <Form.Label>Confirm Password *</Form.Label>
                  <Form.Control type="password" />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Row>
        <Row className="mt-3">
          <Col className="d-flex justify-content-start">
            <button
              style={{
                backgroundColor: "#f14d54",
                color: "white ",
                height: "40px",
                padding: "0 15px",
              }}
            >
              Register
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
