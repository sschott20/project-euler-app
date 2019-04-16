import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCard: false
    };
  }

  render() {
    this.body = this.props.showProblem
      ? this.props.displayProblem
      : this.props.displaySolution;
    this.buttonName = this.props.showProblem
      ? "View Solution"
      : "Back to Question";
    return (
      <div>
        <Jumbotron>
          <h1>{this.props.displayTitle}</h1>
        </Jumbotron>
        <Jumbotron fluid>
          <Container style={{ height: "60%" }}>
            <p style={{ textAlign: "left" }}>{this.body}</p>
          </Container>
          <Button variant="outline-primary" onClick={this.props.showSolution}>
            {this.buttonName}
          </Button>
        </Jumbotron>
        <Button onClick={this.props.onClick}>Go back</Button>
      </div>
    );
  }
}

export default Display;
