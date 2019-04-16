import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class ProblemCard extends Component {
  handleClick() {
    this.props.onClick(
      this.props.title,
      this.props.problem,
      this.props.solution
    );
  }
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.text}</Card.Text>
          <Button onClick={() => this.handleClick()} variant="outline-primary">
            View Problem
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ProblemCard;
