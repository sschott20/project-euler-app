import React, { Component } from "react";
import "./App.css";
import "./Factors.js";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import BreadcrumbItem from "react-bootstrap/BreadcrumbItem";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ProblemCard from "./ProblemCard";
import CardGroup from "./CardGroup";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Display from "./Display";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: true,
      displayText: "",
      displayTitle: ""
    };
  }
  changeDisplay(title) {
    this.setState(prevState => ({
      cards: !prevState.cards
    }));
    this.state = {
      displayTitle: title
    };
    console.log(this.state.displayTitle);
  }
  render() {
    this.cardsInstance = <CardGroup onClick={i => this.changeDisplay(i)} />;
    this.displayInstance = (
      <Display
        displayTitle={this.state.displayTitle}
        onClick={i => this.changeDisplay(i)}
      />
    );
    console.log(this.state.displayTitle);
    return (
      <div className="App">
        <MainNav />

        <header className="App-header">
          {this.state.cards ? this.cardsInstance : this.displayInstance}
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
              <Nav.Link href="https://projecteuler.net/archives">
                Archievs
              </Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default App;
