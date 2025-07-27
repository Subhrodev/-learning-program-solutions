import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    // State stores entrycount and exitcount
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  // Method to update entry count
  UpdateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  // Method to update exit count
  UpdateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>People Counter</h1>
        <p><b>Number of people entered:</b> {this.state.entrycount}</p>
        <p><b>Number of people exited:</b> {this.state.exitcount}</p>
        
        <button onClick={this.UpdateEntry} style={{ marginRight: '10px' }}>
          Login
        </button>
        <button onClick={this.UpdateExit}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
