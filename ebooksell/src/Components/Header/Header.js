import React from "react";
import logo from "../../Images/site-logo.svg";
import cart from "../../Images/cart.svg";
import {Nav,Container,Navbar} from 'react-bootstrap'
import "./header.css";

function Header() {
  return (
    <>
      <Navbar className="_navbar" >
        <Container>
          <img src={logo} alt="logo" />
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="_navlink">Login</Nav.Link>
            <Nav.Link href="#features" className="_navlink">Register</Nav.Link>
          </Nav>
          <img src={cart} className="ms-3" alt="logo" />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
