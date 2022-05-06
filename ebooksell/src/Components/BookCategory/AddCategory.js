import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addCategory } from "../../api";
import "./addcategory.css";

const BookCategory = () => {


  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await addCategory(data);
  };

  return (
    <>
      <Container className="mt-2">
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <h2>Add Category</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Form className="" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Category *</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    {...register("category", { required: true })}
                  />
                </Col>
               
              </Row>

             
              <Row className="mt-3">
                <Col className="d-flex justify-content-start">
                  <button className="_loginbutton" type="submit">
                    Add Category
                  </button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default BookCategory;
