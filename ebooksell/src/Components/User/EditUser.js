import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { displayUser, displayUserById, editUser } from "../../api";
import ToastMesage from "../../ToastMesage";
import { messages } from "../../Shared/Shared";
import { toast } from "react-toastify";


const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadUsersData();
  }, []);
  const onSubmit = async (data) => {
    //console.log(data);
    let response = await editUser(data, id)
      .then(() => {
        toast.success(messages?.UPDATED_SUCCESS);
        navigate("/displayuser");
      })
      .catch(() => {
        toast.error(messages?.ERROR);
      });

    if (response) {
      navigate("/displayuser");
    }
  };
  const loadUsersData = async () => {
    const response = await displayUserById(id);
    //console.log(response);
    reset(response.data);
  };

  return (
    <>
      <Container className="mt-2">
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <h2>Edit User</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Form className="" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    {...register("firstname", {
                      required: true,
                      min: 3,
                      max: 20,
                    })}
                  />
                </Col>
                <Col>
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    {...register("lastname", {
                      required: true,
                      min: 3,
                      max: 20,
                    })}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Email address *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                  />
                </Col>

                <Col>
                  <Form.Label>Role *</Form.Label>

                  <Form.Select
                    name="role"
                    {...register("role", { required: true })}
                  >
                    <option>buyer</option>
                    <option>seller</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="d-flex justify-content-start">
                  <button className="_loginbutton" type="submit">
                    Edit
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

export default EditUser;
