import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Images/site-logo.svg";
import "./Footer.css";
function Footer() {
  const dt = new Date().getFullYear();
  return (
    <>
   
        <Container fluid  className="_footer" style={{backgroundColor: "#d9d9d9",bottom:"0",position:"fixed",}}>
          <Row>
            <Col className="d-flex justify-content-center mt-2">
              <img src={logo} alt="logo" />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mt-2"  >
              <h6
                style={{ color: "rgb(33,33,33)" ,fontSize:"12px"}}
              >
                  {`@${dt} Tatvasoft.com All rights reserved`}
                  </h6>
            </Col>
          </Row>
        </Container>
   
    </>
  );
}

export default Footer;
