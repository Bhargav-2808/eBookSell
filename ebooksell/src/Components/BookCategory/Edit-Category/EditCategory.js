import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { displayCategoryById, editCategory } from "../../../api";
import { messages } from "../../../Shared/Shared";
import ToastMesage from "../../../ToastMesage";

const EditCategory = () => {
  const {id} = useParams();
  // console.log(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    loadcategoriesData();
  }, []);
  const onSubmit = async (data) => {
    const response = await editCategory(data, id) 
    .then(() => {
      toast.success(messages?.UPDATED_SUCCESS);
    })
    .catch(() => {
      toast.error(messages?.ERROR);
    });;
  };
  const loadcategoriesData = async () => {
    const response = await displayCategoryById(id);
    //console.log(response);
    reset(response?.data);
  };

  return (
    <>
      <Container className="mt-2">
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <h2>Edit Category</h2>
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
                    Edit Category
                  </button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Row>
      </Container>
      <ToastMesage/>
    </>
  );
};

export default EditCategory;
