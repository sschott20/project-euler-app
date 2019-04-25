import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
          <Button
            style={{ margin: "1em" }}
            onClick={() => this.handleClick()}
            variant="outline-primary"
          >
            View Problem
          </Button>
          <Row>
            <Col style={{ textAlign: "Center" }}>
              Problem {this.props.problemNumber}
            </Col>
            <Col style={{ textAlign: "Center" }}>
              Difficulty: {this.props.difficulty}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default ProblemCard;
