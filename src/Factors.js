import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BreadcrumbItem from "react-bootstrap/BreadcrumbItem";

class Factors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testNum: this.props.test
    };
  }
  render() {
    return (
      <div className="breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem>{this.state.testNum}</BreadcrumbItem>
          <BreadcrumbItem>Yeetus</BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  }
}

export default Factors;
