import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import search from "../../Images/search.svg";
import "./search.css";
function Search() {
  return (
    <>
      <Container fluid style={{backgroundColor:"#d9d9d9",height:"73px"}}>
        <Row className="">
          <Col className=" mt-3 d-flex justify-content-center">
            <input type="text" placeholder="What are you looking for..." />
            <button  className="_search" type="submit">
              <em>
                <img src={search} style={{ height: "14px" ,padding:" 0 3px"}} alt="search" />
              </em>
              Search
            </button>
            <button style={{backgroundColor:"#f14d54" , color:"white ",height:"40px" ,padding:"0 15px" }}>Cancel</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Search;
