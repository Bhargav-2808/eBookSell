import React, { createContext, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import search1 from "../../Images/search.svg";
import "./search.css";

function Search(props) {
  const [searching, setSearch] = useState("");

  return (
    <>
    
        <Container fluid style={{ backgroundColor: "#d9d9d9", height: "73px" }}>
          <Row className="">
            <Col className=" mt-3 d-flex justify-content-center">
              <input
                type="text"
                placeholder="What are you looking for..."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button className="_search" type="submit" onClick={()=>props.searchData(searching)}>
                <em>
                  <img
                    src={search1}
                    style={{ height: "14px", padding: " 0 3px" }}
                    alt="search"
                  />
                </em>
                Search
              </button>
              
            </Col>
          </Row>
        </Container>
    
    </>
  );
}

export default Search;
