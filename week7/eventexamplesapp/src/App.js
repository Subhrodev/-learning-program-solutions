import React from "react";
import Counter from "./components/Counter";
import SayWelcome from "./components/SayWelcome";
import SyntheticEventButton from "./components/SyntheticEventButton";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Event Examples App</h1>
      <Counter />
      <SayWelcome />
      <SyntheticEventButton />
      <CurrencyConvertor />
    </div>
  );
}

export default App;

