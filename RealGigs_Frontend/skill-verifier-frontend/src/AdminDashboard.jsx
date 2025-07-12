// src/AdminDashboard.jsx
import React, { useState } from "react";

function AdminDashboard({ contract, account }) {
  const [newAddress, setNewAddress] = useState("");

  const addInterviewer = async () => {
    try {
      await contract.methods.authorizeInterviewer(newAddress).send({ from: account });
      alert("✅ Interviewer added successfully!");
      setNewAddress("");
    } catch (err) {
      alert("❌ Error adding interviewer: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>👑 Admin Dashboard</h2>
      <input
        type="text"
        placeholder="Enter interviewer address"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <button onClick={addInterviewer}>Add Interviewer</button>
    </div>
  );
}

export default AdminDashboard;
