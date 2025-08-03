import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  sayHello = () => {
    alert("Hello! This is a static message.");
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button style={{ margin: "10px" }} onClick={this.handleIncrement}>
          Increment
        </button>
        <button style={{ margin: "10px" }} onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
