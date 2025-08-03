import React from "react";

class SayWelcome extends React.Component {
  sayWelcome = (msg) => {
    alert(`Message: ${msg}`);
  };

  render() {
    return (
      <div>
        <button style={{ margin: "10px" }} onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>
      </div>
    );
  }
}

export default SayWelcome;
