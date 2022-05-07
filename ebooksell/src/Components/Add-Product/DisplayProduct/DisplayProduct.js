import React, { useEffect, useState } from "react";
import "./displayProduct.css";
import { Container, Row, Col, Pagination, Card } from "react-bootstrap";
import dummy from "../../../Images/dummy-image.png";
import { displayBook } from "../../../api";

const ProductList = () => {
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    displayBooks();
  }, []);

  const displayBooks = async () => {
    const response = await displayBook();
    // console.log(response);
    // console.log(response?.data);
    setData(response?.data);
  };

  return (
    <>
      <Container className="mt-2">
        <Row className="mt-2">
          <Col className="d-flex justify-content-center">
            <h2>Display Product</h2>
            {/* <img src="C:/projects/E-book-sell/ebooksell/public/images/uploads/img-1651923373732.jpeg" /> */}
          </Col>
        </Row>
        <Row className=" d-flex  ">
          {/* {[...Array(6)].map((data, index) => (
            <Col key={"__"+index}>hii</Col>
          ))} */}

          {/* <Card style={{ width: "13rem" }} className="ms-2">
            <Card.Img
              variant="top"
              src={dummy}
              alt="book-image"
              className="product-img"
            />
            <Card.Body className="d-flex  flex-column align-items-center">
              <Card.Title>Product Title</Card.Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur consectetur odio nec sem laoreet, sed feugiat dolor
                tincidunt.
              </p>
              <button className="_addtocartbtn">Add to cart</button>
            </Card.Body>
          </Card> */}

          {data.map((dataset, index) => (
            <Col className="mt-3">
              <Card
                style={{ width: "200px", postion: "relative" }}
                className="card-style"
                key={index}
              >
                {" "}
                <Card.Body className=" book-card">
                  <img
                    variant="top"
                    src={dummy}
                    alt="book-image"
                    className="product-img"
                  />

                  <Row style={{ height: "18vh" }}>
                    <Col>
                      <Card.Title className="book-card-title">
                        {dataset?.description}
                      </Card.Title>
                    </Col>
                  </Row>
                  <Row style={{ height: "15vh" }} className="mt-2 p-3">
                    <Col>
                      <p>
                        Category : <span className="">{dataset?.category}</span>
                      </p>
                    </Col>
                  </Row>
                  <Row style={{ height: "15vh" }} className="mt-2 p-3">
                    <Col>
                      <p>
                        MRP :{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          {dataset?.price}₹
                        </span>
                        <span style={{ color: "#80bf32", fontWeight: "500" }}>
                          {"      "}
                          &nbsp;20.00% OFF
                        </span>
                        <p><b>₹{dataset?.price - (dataset?.price * 20) / 100}</b></p>
                      </p>
                    </Col>
                  </Row>

                  <Row className="p-1 mb-2" style={{ padding: "1rem" }}>
                    <Col className="d-flex justify-content-center">
                      <hr />
                      <button className="_addtocartbtn  ">Add to cart</button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
