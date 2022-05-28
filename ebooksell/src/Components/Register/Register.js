import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.min.css";
import { toast  ,ToastContainer} from "react-toastify";
import { messages } from "../../Shared/Shared";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api";
import "./register.css";
import ToastMesage from "../../ToastMesage";
import { RoutePaths } from "../../RoutePaths";
function Register() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let response = await registerUser(data)
    .then(() => {
      toast.success(messages?.USER_ADDED);
      navigate(RoutePaths.Home);
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
            <h2>Login or create an Acoount</h2>
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
                    name="fname"
                    {...register("fname", { required: true, min: 3, max: 20 })}
                  />
                </Col>
                <Col>
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="lname"
                    {...register("lname", { required: true, min: 3, max: 20 })}
                  />
                </Col>
              </Row>

              <Form.Label>Email address *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              <Row>
                <Col>
                  <Form.Label>Password *</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    {...register("password", { required: true, min: 8 })}
                  />
                </Col>

                <Col>
                  <Form.Label>Confirm Password *</Form.Label>
                  <Form.Control
                    type="password"
                    name="cpassword"
                    {...register("cpassword", { required: true, min: 8 })}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="d-flex justify-content-start">
                  <button
                    className="_loginbutton"
                    type="submit"
                  >
                    Register
                  </button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Row>
        <ToastMesage/>
      </Container>
    </>
  );
}

export default Register;
