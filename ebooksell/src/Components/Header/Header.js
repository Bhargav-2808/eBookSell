import React, { useContext, useEffect, useState } from "react";
import logo from "../../Images/site-logo.svg";
import lord from "../../Images/uploads/lord.jpg"
import Badge from "@material-ui/core/Badge";
import cart from "../../Images/cart.svg";
import { Nav, Container, Navbar, Row, Col } from "react-bootstrap";
import "./header.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BookContext from "../../Context/book.context";

function Header() {
  let len;
  const navigate = useNavigate();
  const {cartItems}= useContext(BookContext)
  
  const cartPage = () => {
    navigate("/cart");
  };
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
          <div onClick={cartPage} style={{ cursor: "pointer" }}>
            <Badge badgeContent={cartItems.length} color="primary">
              <img src={cart} /> 
            </Badge>
          </div>  
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
