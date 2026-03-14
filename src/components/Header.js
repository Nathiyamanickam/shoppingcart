import React from "react";
import { Container, Navbar, Nav, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const Header = () => {

  const { state } = CartState();
  const { cart } = state;

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>

        <Navbar.Brand>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Shopping Cart
          </Link>
        </Navbar.Brand>

        <Nav>
          <Link to="/cart">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge bg="danger">{cart.length}</Badge>
          </Link>
        </Nav>

      </Container>
    </Navbar>
  );
};

export default Header;