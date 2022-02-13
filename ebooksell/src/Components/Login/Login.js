import React from 'react'
import { Col, Container, Row, Form } from "react-bootstrap";
import './login.css'

function Login() {
  return (
    <>
      <Container className="mt-2">
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <h2>Login or create an Acoount</h2>
          </Col>
        </Row>
        <Row className="mt-4" >
          <Col >
            <h4>New Customer</h4>
            <p>registraton is easy and free</p>
            <ul>
              <li>faster Checkout</li>
              <li>Save multiple shipping address</li>
              <li>Vuew and track orger moore</li>
            </ul>
          </Col>
          <Col>
            <h4>Registered Customer</h4>
            <Form className="">
              <Form.Group className="mb-3">
                <Form.Label>Email address *</Form.Label>
                <Form.Control type="email" />
                <Form.Label>Password *</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="d-flex justify-content-start">
            <button style={{backgroundColor:"#f14d54" , color:"white ",height:"40px" ,padding:"0 15px" }}>Create new account</button>
          </Col>
          <Col className="d-flex justify-content-start">
            <button style={{backgroundColor:"#f14d54" , color:"white ",height:"40px" ,padding:"0 15px" }}>Login</button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login