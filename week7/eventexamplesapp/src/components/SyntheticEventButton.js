import React from "react";

class SyntheticEventButton extends React.Component {
  handleSyntheticEvent = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event:", event);
  };

  render() {
    return (
      <div>
        <button style={{ margin: "10px" }} onClick={this.handleSyntheticEvent}>
          OnPress
        </button>
      </div>
    );
  }
}

export default SyntheticEventButton;
