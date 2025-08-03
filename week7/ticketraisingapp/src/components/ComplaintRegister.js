import React, { useState } from "react";

const ComplaintRegister = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (employeeName.trim() === "" || complaint.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Generate random reference number
    const referenceNumber = "REF-" + Math.floor(100000 + Math.random() * 900000);

    alert(
      `Complaint submitted successfully!\nEmployee: ${employeeName}\nReference No: ${referenceNumber}`
    );

    // Clear the form
    setEmployeeName("");
    setComplaint("");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Raise a Complaint</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Employee Name: </label><br />
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Enter your name"
            required
            style={{ width: "300px", padding: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Complaint:</label><br />
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Describe your complaint"
            required
            rows="5"
            style={{ width: "300px", padding: "5px" }}
          />
        </div>

        <button type="submit" style={{ padding: "8px 16px" }}>
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintRegister;
