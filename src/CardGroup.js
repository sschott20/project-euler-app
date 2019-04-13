import React, { Component } from "react";

import CardColumns from "react-bootstrap/CardColumns";

import ProblemCard from "./ProblemCard";

class CardGroup extends Component {
  handleClick(title, text) {
    this.props.onClick(title, text);
  }
  render() {
    this.lychrelSolution = (
      <div>
        <p>
          If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.
          <br />
          Not all numbers produce palindromes so quickly. For example,
          <br />
          349 + 943 = 1292,
          <br />
          1292 + 2921 = 4213
          <br />
          4213 + 3124 = 7337
          <br />
          That is, 349 took three iterations to arrive at a palindrome.
          <br />
          Although no one has proved it yet, it is thought that some numbers,
          like 196, never produce a palindrome. A number that never forms a
          palindrome through the reverse and add process is called a Lychrel
          number. Due to the theoretical nature of these numbers, and for the
          purpose of this problem, we shall assume that a number is Lychrel
          until proven otherwise. In addition you are given that for every
          number below ten-thousand, it will either (i) become a palindrome in
          less than fifty iterations, or, (ii) no one, with all the computing
          power that exists, has managed so far to map it to a palindrome. In
          fact, 10677 is the first number to be shown to require over fifty
          iterations before producing a palindrome: 4668731596684224866951378664
          (53 iterations, 28-digits).
          <br />
          Surprisingly, there are palindromic numbers that are themselves
          Lychrel numbers; the first example is 4994.
          <br />
          How many Lychrel numbers are there below ten-thousand?
          <br />
          NOTE: Wording was modified slightly on 24 April 2007 to emphasise the
          theoretical nature of Lychrel numbers.
          <br />
        </p>
      </div>
    );
    return (
      <div id="card-columns">
        <CardColumns>
          <ProblemCard
            title="Lychrel Numbers"
            text="How many times do you have to reverse add a number to itself before it becomes a palendrome?"
            onClick={(i, e) => this.handleClick(i, e)}
            solution={this.lychrelSolution}
          />
          <ProblemCard
            title="title two"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            onClick={(i, e) => this.handleClick(i, e)}
          />
          <ProblemCard
            title="title three"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            onClick={(i, e) => this.handleClick(i, e)}
          />
        </CardColumns>
      </div>
    );
  }
}

export default CardGroup;
