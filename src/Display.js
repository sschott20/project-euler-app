import React, { Component } from "react";

import CardColumns from "react-bootstrap/CardColumns";

import ProblemCard from "./ProblemCard";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCard: false
    };
  }

  render() {
    return (
      <Jumbotron>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
        <p>
          <Button onClick={this.props.onClick} variant="primary">
            Learn more
          </Button>
        </p>
      </Jumbotron>
    );
  }
}

export default Display;
