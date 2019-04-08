import React, { Component } from "react";
import "./App.css";
import "./Factors.js";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Factors from "./Factors.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}
class MainNav extends Component {
  render() {
    return (
      <div className="navbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="./">Project Euler Solutions</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Archievs</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default App;
