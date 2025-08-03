import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euro: "",
      rate: 0.011, // Sample conversion rate INR -> Euro
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { rupees, rate } = this.state;
    const euroValue = (parseFloat(rupees) * rate).toFixed(2);
    this.setState({ euro: euroValue });
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor (INR to Euro)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.rupees}
            placeholder="Enter INR"
            onChange={this.handleChange}
            required
          />
          <button type="submit" style={{ marginLeft: "10px" }}>
            Convert
          </button>
        </form>
        {this.state.euro && (
          <h3>{this.state.rupees} INR = {this.state.euro} Euro</h3>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
