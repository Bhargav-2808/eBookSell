import React, { useEffect, useState } from "react";
import "./cart.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import dummy from "../../Images/dummy-image.png";
import { useContext } from "react";
import bookContext from "../../Context/book.context";
import { addCart } from "../../api";

function Cart() {
  const { cartItems, removeItem } = useContext(bookContext);
  let price = 0;
  cartItems.map((item) => {
    price += parseInt(item?.price - (item?.price * 20) / 100);
  });

  const today = new Date();
  const book = {
    books: cartItems.length,
    OrderDate:
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    totalprice: price,
  };

  const addCartDetails = async () => {
    const response = await addCart(book);
    console.log(response);
  };

  const cart = (
    <>
      {cartItems.map((item, index) => (
        <Container
          className="mt-3"
          style={{
            width: "40rem",
            border: "0.5px solid #d9d9d9 ",
            height: "100px",
          }}
          key={index}
        >
          <Row>
            <Col lg={3} style={{}}>
              <img src={dummy} alt="book-image" className="cart-image" />
            </Col>
            <Col lg={9}>
              <Row className="mt-1">
                <Col>₹{item?.price - (item?.price * 20) / 100}</Col>
              </Row>
              <Row>
                <Col>{item.description.split("!")[0]}</Col>
                <Col>
                  <del>{item.price}</del>{" "}
                  <span>
                    <b style={{ color: "#f14d54" }}>20% off</b>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span
                    style={{ color: "#f14d54", cursor: "pointer" }}
                    onClick={() => {
                      removeItem(item._id);
                    }}
                    className="mb-1 mt-1"
                  >
                    remove
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ))}
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
            <h6>My shopping Bag({cartItems.length} items)</h6>
          </Col>
          <Col className="d-flex justify-content-center">
            Total Price : {price} ₹
          </Col>
        </Row>
        <Row className="mt-2  ">{cart}</Row>
        <Row className="mt-2  ">
          <Col className="d-flex justify-content-center mt-2">
            {cartItems.length > 0 && (
              <button
                style={{
                  backgroundColor: "#f14d54",
                  color: "white ",
                  height: "40px",
                  padding: "0 15px",
                  marginLeft: "5px",
                }}
                onClick={addCartDetails}
              >
                Place order
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
