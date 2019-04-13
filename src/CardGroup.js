import React, { Component } from "react";

import CardColumns from "react-bootstrap/CardColumns";

import ProblemCard from "./ProblemCard";

class CardGroup extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(text) {
    this.props.onClick(text);
  }
  render() {
    return (
      <div id="card-columns">
        <CardColumns>
          <ProblemCard
            title="Lychrel Numbers"
            text="How many times do you have to reverse add a number to inself before it becomes a palendrome?"
            onClick={i => this.handleClick(i)}
          />
          <ProblemCard
            title="title two"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <ProblemCard
            title="title three"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </CardColumns>
      </div>
    );
  }
}

export default CardGroup;
