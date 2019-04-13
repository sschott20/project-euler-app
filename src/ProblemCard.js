import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Holder from "react-holder";

class ProblemCard extends Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    this.props.onClick(this.props.title);
    return;
  }
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.text}</Card.Text>
          <Button onClick={() => this.handleClick()} variant="primary">
            View Solution
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ProblemCard;
