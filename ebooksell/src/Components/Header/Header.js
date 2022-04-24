import React from "react";
import logo from "../../Images/site-logo.svg";
import cart from "../../Images/cart.svg";
import { Nav, Container, Navbar } from "react-bootstrap";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="_navbar">
        <Container>
          <img src={logo} alt="logo" />
          <Nav className="ms-auto">
            <Link to="/login" className="_navlink">
              Login
            </Link>
            <p className="_dash">|</p>
            <Link to="/register" className="_navlink">
              Register
         
            </Link>
            <p className="_dash">|</p>
            <Link to="/displayuser" className="_navlink">
              User
            </Link>
          </Nav>
          <img src={cart} className="ms-3" alt="logo" />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
