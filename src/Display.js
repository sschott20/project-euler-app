import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Prism from "prismjs";
import Col from "react-bootstrap/Col";
import "./prism.css";
import Row from "react-bootstrap/Row";
class Display extends Component {
  componentDidMount() {
    Prism.highlightAll();
    console.log("highlight");
  }
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
          <Row>
            <Col xs={5}>
              <h1>{this.props.displayTitle}</h1>
            </Col>
            <Col>
              <Button
                style={{ marginTop: ".5em" }}
                onClick={this.props.onClick}
              >
                Go back
              </Button>
            </Col>
          </Row>
        </Jumbotron>
        <Jumbotron fluid>
          <Container style={{ height: "60%" }}>
            <div style={{ textAlign: "left" }}>{this.body}</div>
          </Container>
          <Button variant="outline-primary" onClick={this.props.showSolution}>
            {this.buttonName}
          </Button>
        </Jumbotron>
      </div>
    );
  }
}

export default Display;
