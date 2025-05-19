import React from "react";
import { Navbar, Row, Container, Form } from "react-bootstrap";
import logo from "../image/logo.png";

export const NavBar = ({ searchMovies }) => {
  return (
    <Row className="g-0 mb-4">
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" className="logo-img" />
          </Navbar.Brand>
          <Form className="d-flex flex-grow-1 mx-auto ">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => searchMovies(e.target.value)}
            />
          </Form>
        </Container>
      </Navbar>
    </Row>
  );
};
