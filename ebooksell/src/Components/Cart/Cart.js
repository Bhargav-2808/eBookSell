import React from "react";
import "./cart.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import dummy from "../../Images/dummy-image.png";


function Cart() {
  const cart = (
    <>
      <Container
        
        className="mt-3"
        style={{ width:"40rem",border: "0.5px solid #d9d9d9 ", height: "100px" }}
      >
        <Row>
          <Col lg={3}style={{}}>
            <img src={dummy} alt="book-image" className="cart-image" />
          </Col>
          <Col lg={9}>
            <Row>
              <Col><b>Campus Sutra</b></Col>
              <Col>500</Col>
            </Row>
            <Row>
              <Col>Cart item name</Col>
              <Col><del>1000</del> <span ><b style={{color:"#f14d54"}}>50% off</b></span></Col>
            </Row>
            <Row>
              <Col><span className="_additem">-</span>1<span className="_additem">+</span></Col>
              <Col style={{color:"#f14d54"}}>remove</Col>
              
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
  return (
    <>
      <Container fluid className="mt-2">
        <Row className="mt-2">
          <Col className="d-flex justify-content-center">
            <h2>Cart Page</h2>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="d-flex justify-content-center">
            <h6>My shopping Bag(3 items)</h6>
          </Col>
          <Col className="d-flex justify-content-center">
           <h6>Total price : 1500</h6>
          </Col>
        </Row>
        <Row className="mt-2  ">
          {[...Array(4)].map((index) => (
            <Col className="d-flex justify-content-center" key={index}>
              {cart}
            </Col>
          ))}
        </Row>
        <Row className="mt-2  ">
        <Col className="d-flex justify-content-center mt-2">
        <button
              style={{
                backgroundColor: "#f14d54",
                color: "white ",
                height: "40px",
                padding: "0 15px",
                marginLeft: "5px",
                
              }}
              
            >
              Place order
            </button>
         </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
