import React, { Component } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import ProblemCard from "./ProblemCard";
import Prism from "prismjs";
import "./prism.css";
import "./CardGroup.css";
class CardGroup extends Component {
  componentDidMount() {
    Prism.highlightAll();
    console.log("highlight");
  }
  constructor(props) {
    super(props);
    this.state = {
      lychrelNumbers: ""
    };
  }
  handleClick(title, problem, solution) {
    this.props.onClick(title, problem, solution);
  }
  changeLychrelInput(event) {
    this.setState({ lychrelNumbers: event.target.value });
  }
  reverse(num) {
    return Number.parseInt(
      num
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  }
  solution() {
    let polynomialX = x => {
      return [-79 - 2 * x, 1601 + 79 * x + Math.pow(x, 2)];
    };

    let lastAB = [];

    for (let i = -50; i < 0; i++) {
      var [a, b] = polynomialX(i);
      if (b > 1000 || b < -1000 || a > 1000 || a < -1000) break;
      lastAB = [a, b];
    }

    return lastAB[0] * lastAB[1];
  }

  render() {
    this.lychrelProblem = (
      <div>
        <p>
          If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.
          <br />
          <br />
          Not all numbers produce palindromes so quickly. For example,
          <br />
          &emsp;&emsp;349 + 943 = 1292,
          <br />
          &emsp;&emsp;1292 + 2921 = 4213
          <br />
          &emsp;&emsp;4213 + 3124 = 7337
          <br />
          That is, 349 took three iterations to arrive at a palindrome.
          <br />
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
          <br />
          Surprisingly, there are palindromic numbers that are themselves
          Lychrel numbers; the first example is 4994.
          <br />
          <br />
          How many Lychrel numbers are there below ten-thousand?
          <br />
        </p>
      </div>
    );
    this.lychrelSolution = (
      <div style={{ padding: "0 , 10vw" }}>
        <p className="mainText">
          We start with two for loops that form the basis of the algorithim. One
          will search every number from 0 to the target, and the other one will
          check every number to see if it is a lychrel
        </p>
        <pre>
          <code className="language-javascript">
            {`
			lychrelSolve(target) {
				for (let i = 0; i < target; i ++) {
					for(let n = 0; n < 50; n++) {
						//check for Lychrel
					}
				}
			}
			`}
          </code>
        </pre>
        <br />
        <p>
          We need to add a way to get the palendrome of a number, so we will
          write a function which takes an integer as input and returns the
          palendrom. Javascript has no built in methods to reverse the order of
          characters in an integer, but we can get around this by first turning
          it into a string, then reversing it, then putting it back together
        </p>
        <pre>
          <code className="language-javascript">
            {`
			reverse(int) {
				return Number.parseInt(
					int
						.toString()
						.split("")
						.reverse()
						.join("")
				);
			}
			lychrelSolve(target) {
				for (let i = 0; i < target; i ++) {
					for(let n = 0; n < 50; n++) {
						//check for Lychrel
					}
				}
			}
			`}
          </code>
        </pre>
        <br />
        <p>
          Now all we have to do is add the number to its palendrom and see if it
          becomes a palendrom itself. If it gets to the 50th iteration, as
          stated in the problem we can assume Lychrelness, and add it to our
          count
        </p>
        <pre>
          <code className="language-javascript">
            {`
			reverse(int) {
				return Number.parseInt(
					int
						.toString()
						.split("")
						.reverse()
						.join("")
				);
			}
			lychrelSolve(target) {
				let reverse;
				let sum;
				let count = 0;
				for (let i = 0; i < target; i ++) {
					sum = i;
					for(let n = 0; n < 50; n++) {
						if (sum === reverse(sum)){
							break;
						} else if (n === 49) {
							count += 1;
						}
					}
				}
				return count;
			}
			`}
          </code>
        </pre>
      </div>
    );
    this.quadraticPrimesProblem = (
      <div>
        Euler discovered the remarkable quadratic formula:
        <br />
        <br />
        &emsp;&emsp; n<sup>2</sup>+n+41 <br />
        <br />
        It turns out that the formula will produce 40 primes for the consecutive
        integer values 0≤n≤39. However, when n=40,40<sup>2</sup>
        +40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,412+41+41
        is clearly divisible by 41.
        <br /> <br />
        The incredible formula n<sup>2</sup>−79n+1601 was discovered, which
        produces 80 primes for the consecutive values 0≤n≤79. The product of the
        coefficients, −79 and 1601, is −126479. <br />
        <br />
        Considering quadratics of the form:
        <br /> <br />
        &emsp;&emsp;n<sup>2</sup>+an+b, where |a| &lt; 1000 and |b| &ge; 1000
        <br />
        <br />
        &emsp;&emsp; where |n| is the modulus/absolute value of n<br />
        &emsp;&emsp; e.g. |11|=11 and |−4|=4 <br />
        <br />
        Find the product of the coefficients, a and b, for the quadratic
        expression that produces the maximum number of primes for consecutive
        values of n, starting with n=0.
      </div>
    );
    this.quadraticPrimesSolution = (
      <div>
        <pre>
          <code className="language-javascript">
            {`
			function solution() {
				let polynomialX = (x) => {
					return [-79 - 2 * x, 1601 + 79 * x + Math.pow(x, 2)];
				};

				let lastAB = [];

				for (let i = -50; i < 0; i++) {
					var [a, b] = polynomialX(i);
					if (b > 1000 || b < -1000 || a > 1000 || a < -1000) break;
					lastAB = [a, b];
				}

				return lastAB[0] * lastAB[1];
			}
		`}
          </code>
        </pre>
      </div>
    );
    return (
      <div id="card-columns">
        <CardColumns>
          <ProblemCard
            title="Lychrel Numbers"
            text="How many times do you have to reverse add a number to itself before it becomes a palendrome?"
            onClick={(i, e, o) => this.handleClick(i, e, o)}
            problem={this.lychrelProblem}
            solution={this.lychrelSolution}
            problemNumber="55"
            difficulty="5%"
          />
          <ProblemCard
            title="Quadratic primes"
            text="Find a quadratic which produces the maximum number of primes for consecutive inputs"
            onClick={(i, e, o) => this.handleClick(i, e, o)}
            problem={this.quadraticPrimesProblem}
            solution={this.quadraticPrimesSolution}
            problemNumber="27"
            difficulty="5%"
          />
          <ProblemCard
            title="Prime Factorization"
            text="What is the minimum number of tries it takes to factor a given number?"
            onClick={(i, e, o) => this.handleClick(i, e, o)}
            problem={this.quadraticPrimesProblem}
            solution={this.quadraticPrimesSolution}
            problemNumber="27"
            difficulty="5%"
          />
        </CardColumns>
      </div>
    );
  }
}

export default CardGroup;
