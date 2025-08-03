import React from "react";
import FlightList from "./FlightList";

const GuestPage = ({ onLogin }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome Guest!</h1>
      <p>Please log in to book tickets.</p>
      <button onClick={onLogin} style={{ margin: "10px", padding: "10px" }}>
        Login
      </button>
      <FlightList />
    </div>
  );
};

export default GuestPage;
