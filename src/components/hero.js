import React, { Component } from 'react'
import "../components/hero.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class hero extends Component {
  render() {
    return (
        <div className="head-img banner">
        <div className="bg">
          <div className="text">
            <h2>Conference | Workshops | CTF</h2>
            <h1>AEGIS 2023</h1>
            <Button variant="primary" as={Link} to={"/booking"}>BookTickets</Button>{" "}
          </div>
        </div>
      </div>
    )
  }
}
