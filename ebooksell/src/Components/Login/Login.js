import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginUser } from "../../api";
import "./login.css";

function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
      let response = await loginUser(data);
      if (response) {
        // navigate("/login");
      }
  };
  return (
    <>
      <Container className="mt-2">
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <h2>Login or create an Acoount</h2>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Row className="d-flex">
              <Col className="">
                <h4>New Customer</h4>
                <p>registraton is easy and free</p>
                <ul>
                  <li>faster Checkout</li>
                  <li>Save multiple shipping address</li>
                  <li>Vuew and track orger moore</li>
                </ul>
                <Col className="d-flex justify-content-start mt-5">
                <button className="_loginbutton" type="submit">
                 <Link to="register"> Create New Account</Link>
                </button>
              </Col>
              </Col>
           
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <h4>Registered Customer</h4>
                <Form className="" onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      })}
                    />
                    <Form.Label>Password *</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      {...register("password", { required: true, min: 8 })}
                    />
                  </Form.Group>

                  <Col className="d-flex justify-content-start">
                    <button className="_loginbutton" type="submit">
                      Login
                    </button>
                  </Col>
                </Form>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Login;
