import React, { Component } from "react";

//mounting lifecycle
class UpdateCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
    console.log(`Constructor method B`);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`Static getDerivedStateFromProps B`);
    return null;
  }

  componentDidMount() {
    console.log(`componentDidMount B`);
  }

  render() {
    console.log(`render method B`);
    return <h1>UpdateCycleB</h1>;
  }
}

export default UpdateCycleB;
