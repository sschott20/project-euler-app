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

  render() {
    this.lychrelProblem = (
      <div>
        <p>
          If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.
          <br />
          <br />
          Not all numbers produce palindromes so quickly. For example,
          <br />
          &emsp;&emsp;&emsp;&emsp;349 + 943 = 1292,
          <br />
          &emsp;&emsp;&emsp;&emsp;1292 + 2921 = 4213
          <br />
          &emsp;&emsp;&emsp;&emsp;4213 + 3124 = 7337
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
			function lychrelSolve(target) {
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
			function reverse(int) {
				return Number.parseInt(
					int
						.toString()
						.split("")
						.reverse()
						.join("")
				);
			}
			function lychrelSolve(target) {
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
			function reverse(int) {
				return Number.parseInt(
					int
						.toString()
						.split("")
						.reverse()
						.join("")
				);
			}
			function lychrelSolve(target) {
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
        &emsp;&emsp;&emsp;&emsp; <i>n</i>
        <sup>2</sup> + <i>n</i> + 41 <br />
        <br />
        It turns out that the formula will produce 40 primes for the consecutive
        integer values 0 ≤ <i>n</i> ≤ 39. However, when <i>n</i> = 40, 40
        <sup>2</sup>+ 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and
        certainly when <i>n</i>
        = 41, 412 + 41 + 41 is clearly divisible by 41.
        <br /> <br />
        The incredible formula <i>n</i>
        <sup>2</sup> − 79<i>n</i> + 1601 was discovered, which produces 80
        primes for the consecutive values 0 ≤ <i>n</i> ≤ 79. The product of the
        coefficients, −79 and 1601, is −126479. <br />
        <br />
        Considering quadratics of the form:
        <br /> <br />
        &emsp;&emsp;&emsp;&emsp;n<sup>2</sup> + <i>an</i> + <i>b</i>, where |
        <i>a</i>| &lt; 1000 and |<i>b</i>| &ge; 1000
        <br />
        <br />
        &emsp;&emsp;&emsp;&emsp; where |<i>n</i>| is the modulus/absolute value
        of <i>n</i>
        <br />
        &emsp;&emsp;&emsp;&emsp; e.g. |11| = 11 and |−4| = 4 <br />
        <br />
        Find the product of the coefficients, <i>a</i> and <i>b</i>, for the
        quadratic expression that produces the maximum number of primes for
        consecutive values of <i>n</i>, starting with <i>n</i> = 0.
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
    this.pandigitalMultiplesProblem = (
      <p>
        Take the number 192 and multiply it by each of 1, 2, and 3:
        <br />
        <br />
        &emsp;&emsp;&emsp;&emsp;192 × 1 = 192
        <br />
        &emsp;&emsp;&emsp;&emsp;192 × 2 = 384
        <br />
        &emsp;&emsp;&emsp;&emsp;192 × 3 = 576
        <br />
        <br />
        By concatenating each product we get the 1 to 9 pandigital, 192384576.
        We will call 192384576 the concatenated product of 192 and (1,2,3)
        <br />
        <br />
        The same can be achieved by starting with 9 and multiplying by 1, 2, 3,
        4, and 5, giving the pandigital, 918273645, which is the concatenated
        product of 9 and (1, 2, 3, 4, 5).
        <br />
        <br />
        What is the largest 1 to 9 pandigital 9-digit number that can be formed
        as the concatenated product of an integer with (1, 2, ... , <i>n</i>)
        where <i>n</i> > 1?
      </p>
    );

    this.pandigitalMultiplesSolution = (
      <pre>
        <code className="language-javascript">
          {`
			fucntion isPandigital (str) {
				return 
				str.includes("1") && 
				str.includes("2") && 
				str.includes("3") && 
				str.includes("4") && 
				str.includes("5") && 
				str.includes("6") && 
				str.includes("7") && 
				str.includes("8") && 
				str.includes("9")
			}

			function task () {
				let currentLargest = 0;
				// largest must start with a 9
				// but can't be more than 5 digits (n>1)
				// so i should probably start with a 9
				// but doing that means n must be 2 (maybe?)
				// so start at 9999 and go until 9000
				for (let i = 9999; i > 9000; i--) {
					panTest = i.toString() + (i*2).toString();
					if (isPandigital(panTest)) {
						console.log(panTest);
					}
				}
			}
		`}
        </code>
      </pre>
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
            title="Pandigital Multiples"
            text="Find the largest pandigital number formed from a concatenated product of an integer"
            onClick={(i, e, o) => this.handleClick(i, e, o)}
            problem={this.pandigitalMultiplesProblem}
            solution={this.pandigitalMultiplesSolution}
            problemNumber="38"
            difficulty="5%"
          />
        </CardColumns>
      </div>
    );
  }
}

export default CardGroup;
