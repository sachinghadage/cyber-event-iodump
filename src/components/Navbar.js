import { Component } from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../routes/Home";
import Booking from "../routes/booking"

class NavbarC extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="">PuneDao</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="me-auto">
                  <Nav.Link as={Link} to={""}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/program"}>
                    Program
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/speakers"}>
                    Speaker
                  </Nav.Link>
                  <Button variant="primary" as={Link} to={"/booking"}>BookTickets</Button>{" "}
                </Nav> */}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default NavbarC;
