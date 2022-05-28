import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast ,ToastContainer} from "react-toastify";
import { addCategory } from "../../api";
import { messages } from "../../Shared/Shared";
import "./addcategory.css";

const BookCategory = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    let response = await addCategory(data)
      .then(() => {
        toast.success(messages?.CATEGORY_ADDED);
        navigate("/displaycategory");
      })
      .catch(() => {
        toast.error(messages?.ERROR);
      });
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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </>
  );
};

export default BookCategory;
