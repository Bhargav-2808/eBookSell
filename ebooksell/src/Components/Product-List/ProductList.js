import React from "react";
import "./ProductList.css";
import { Container, Row, Col, Pagination, Card } from "react-bootstrap";
import dummy from '../../Images/dummy-image.png'

function ProductList() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div className="_padination">
      <Pagination size="sm">{items}</Pagination>
    </div>
  );

  const card = (
    <>
      <Card style={{ width: "19.5rem" }}  >
        <Card.Img variant="top" src={dummy} alt="book-image" />
        <Card.Body className="d-flex  flex-column align-items-center">
          <Card.Title>Product Title</Card.Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur odio nec sem laoreet, 
            sed feugiat dolor tincidunt. </p>
          <button className="_addtocartbtn">Add to cart</button>
        </Card.Body>

       
      </Card>
    </>
  );

  return (
    <>
      <Container fluid className="mt-2">
        <Row className="mt-2">
          <Col className="d-flex justify-content-center">
            <h2>Edit Product</h2>
          </Col>
        </Row>
        <Row className="mt-2  ">
          {[...Array(4)].map((index) => (
            <Col className="d-flex justify-content-center" key={index}>{card}</Col>
          ))}
        </Row>
        <Row className="mt-1" className="">
          <Col className="d-flex justify-content-center ">
            {paginationBasic}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductList;
