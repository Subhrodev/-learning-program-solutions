import React from "react";

const FlightList = () => {
  const flights = [
    { id: 1, name: "Indigo 6E-123", from: "Delhi", to: "Mumbai", price: "₹4500" },
    { id: 2, name: "Air India AI-456", from: "Chennai", to: "Bangalore", price: "₹3500" },
    { id: 3, name: "SpiceJet SJ-789", from: "Kolkata", to: "Hyderabad", price: "₹4000" }
  ];

  return (
    <div>
      <h2>Available Flights</h2>
      <table border="1" cellPadding="10" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.name}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightList;
