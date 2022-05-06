import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const AddProduct = () => {
  return (
    <>
      <Container className="mt-2">
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <h2>Edit Product</h2>
          </Col>
        </Row>
        <Row className="mt-3">
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
              <Row>
                <Col style={{ display: "row", flexDirection: "column" }}>
                  <Form.Label>Shop by Categories</Form.Label>
                  <select className="_select">
                    <option></option>
                  </select>
                </Col>

                <Col>
                  <Form.Label>Discription</Form.Label>
                  <Form.Control type="password" />
                </Col>
              </Row>

              <Form.Group controlId="formFile" className="mb-3 mt-5">
                <Form.Control type="file" />
              </Form.Group>
            </Form.Group>
          </Form>
        </Row>
        <Row className="mt-1">
          <Col className="d-flex justify-content-start">
            <button
              style={{
                backgroundColor: "#80bf32",
                color: "white ",
                height: "40px",
                padding: "0 15px",
              }}
            >
              Save
            </button>
            <button
              style={{
                backgroundColor: "#f14d54",
                color: "white ",
                height: "40px",
                padding: "0 15px",
                marginLeft: "5px",
              }}
            >
              Cancle
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddProduct;
