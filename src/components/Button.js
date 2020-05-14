import React, { Component } from "react";
import UpdateCycleA from "./UpdateCycleA";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      comment: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //method to handle click
  handleClick(e) {
    this.setState({
      isClicked: true,
      comment: "Hey! you just clicked me"
    });
  }
  render() {
    const { isClicked, comment } = this.state;

    return (
      <div>
        <h2>{comment}</h2>
        <button type="submit" onClick={this.handleClick}>
          {isClicked ? "BUTTON CLICKED" : "BUTTON NOT CKICKED"}
        </button>
        <UpdateCycleA />
      </div>
    );
  }
}

export default Button;
