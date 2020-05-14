import React, { Component } from "react";
import UpdateCycleB from "./UpdateCycleB";

//mounting lifecycle
class UpdateCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
    console.log(`Constructor method A`);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`Static getDerivedStateFromProps A`);
    return null;
  }

  componentDidMount() {
    console.log(`componentDidMount A`);
  }

  render() {
    console.log(`render method A`);
    return (
      <div>
        <h1>UpdateCycleA</h1>
        <UpdateCycleB />
      </div>
    );
  }
}

export default UpdateCycleA;
