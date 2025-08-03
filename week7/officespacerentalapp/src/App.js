import React from "react";
import "./App.css";

function App() {
  // Single office object
  const office = {
    name: "Skyline Tower",
    rent: 55000,
    address: "MG Road, Bangalore",
    image: 'office1.jpg' // Sample image URL
  };

  // List of office objects
  const officeList = [
    {
      name: "Skyline Tower",
      rent: 55000,
      address: "MG Road, Bangalore",
      image: 'office2.jpg'
    },
    {
      name: "Tech Park",
      rent: 75000,
      address: "Whitefield, Bangalore",
      image: 'office3.jpg'
    },
    {
      name: "Business Hub",
      rent: 60000,
      address: "Salt Lake, Kolkata",
      image: 'office4.jpg'
    }
  ];

  return (
    <div className="App">
      {/* Heading element */}
      <h1>Office Space Rental App</h1>

      {/* Display single office details */}
      <div className="office-card">
        <h2>{office.name}</h2>
        <img src={office.image} alt={office.name} width="300" />
        <p><b>Address:</b> {office.address}</p>
        <p
          style={{
            color: office.rent < 60000 ? "red" : "green"
          }}
        >
          <b>Rent:</b> ₹{office.rent}
        </p>
      </div>

      <hr />

      {/* Loop through officeList */}
      <h2>Available Offices:</h2>
      <div className="office-list">
        {officeList.map((item, index) => (
          <div className="office-card" key={index}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} width="300" />
            <p><b>Address:</b> {item.address}</p>
            <p
              style={{
                color: item.rent < 60000 ? "red" : "green"
              }}
            >
              <b>Rent:</b> ₹{item.rent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
