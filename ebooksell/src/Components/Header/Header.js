import React, { useContext, useEffect, useState } from "react";
import logo from "../../Images/site-logo.svg";
import lord from "../../Images/uploads/lord.jpg";
import Badge from "@material-ui/core/Badge";
import cart from "../../Images/cart.svg";
import { Nav, Container, Navbar, Row, Col } from "react-bootstrap";
import "./header.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BookContext from "../../Context/book.context";
import { RoutePaths } from "../../RoutePaths";

function Header() {
  let len;
  const navigate = useNavigate();
  const { cartItems } = useContext(BookContext);

  const cartPage = () => {
    navigate("/cart");
  };


    const logout =()=>{
      sessionStorage.clear();
    }


  
  return (
    <>
      <Navbar className="_navbar">
        <Container>
          <img src={logo} alt="logo" />
          <Nav className="ms-auto">

            {
              sessionStorage.getItem("user") ? (<>
              <Link  className="_navlink" to ="#" onClick={logout}>Log out</Link>
              </>):( <Link to={RoutePaths.Home} className="_navlink">
              Login
            </Link>)
            }
           
            <p className="_dash">|</p>
            <Link to={RoutePaths.Register} className="_navlink">
              Register
            </Link>
            <p className="_dash">|</p>
            <Link to={RoutePaths.AddCartProduct} className="_navlink">
              Product
            </Link>
            {sessionStorage.getItem("user") ? (
              <>
                <p className="_dash">|</p>
                <Link to={RoutePaths.DisplayUser} className="_navlink">
                  User
                </Link>
                <p className="_dash">|</p>
                <Link to={RoutePaths.DisplayCategory} className="_navlink">
                  Category
                </Link>
                <p className="_dash">|</p>
                <Link to={RoutePaths.ProductList} className="_navlink">
                  ProductList
                </Link>
              </>
            ) : null}
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
