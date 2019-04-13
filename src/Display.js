import React, { Component } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import ProblemCard from "./ProblemCard";
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
    return (
      <div>
        <Jumbotron>
          <h1>{this.props.displayTitle}</h1>
        </Jumbotron>
        <Jumbotron fluid>
          <Container>
            <p>{this.props.displayText}</p>
          </Container>
        </Jumbotron>
        <Button onClick={this.props.onClick}>Go back</Button>
      </div>
    );
  }
}

export default Display;
