import React, { Component } from "react";
import "./App.css";
import "./Factors.js";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CardGroup from "./CardGroup";

import Display from "./Display";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: true,
      displaySolution: "",
      displayTitle: "",
      displayProblem: "",
      showProblem: true
    };
  }
  changeDisplay(title, problem, solution) {
    this.setState(prevState => ({
      cards: !prevState.cards,
      displayTitle: title,
      displayProblem: problem,
      displaySolution: solution
    }));
  }
  showSolution() {
    this.setState(prevState => ({
      showProblem: !prevState.showProblem
    }));
  }
  //   hejl
  render() {
    this.cardsInstance = (
      <CardGroup onClick={(i, e, o) => this.changeDisplay(i, e, o)} />
    );
    this.displayInstance = (
      <div class="main-display">
        <Display
          displayTitle={this.state.displayTitle}
          displayProblem={this.state.displayProblem}
          displaySolution={this.state.displaySolution}
          showProblem={this.state.showProblem}
          onClick={() => this.changeDisplay()}
          showSolution={() => this.showSolution()}
        />
      </div>
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
