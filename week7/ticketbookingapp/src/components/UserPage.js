import React from "react";
import FlightList from "./FlightList";

const UserPage = ({ onLogout }) => {
  const bookTicket = () => {
    alert("Your ticket has been booked!");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome User!</h1>
      <p>You can now book tickets.</p>
      <button onClick={onLogout} style={{ margin: "10px", padding: "10px" }}>
        Logout
      </button>
      <FlightList />
      <br />
      <button
        onClick={bookTicket}
        style={{ margin: "10px", padding: "10px", background: "green", color: "white" }}
      >
        Book Ticket
      </button>
    </div>
  );
};

export default UserPage;
