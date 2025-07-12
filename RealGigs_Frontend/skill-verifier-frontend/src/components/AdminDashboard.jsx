import React, { useState } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./contract";

function AdminDashboard() {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  const handleAdd = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
      const accounts = await web3.eth.getAccounts();

      await contract.methods.authorizeInterviewer(address).send({ from: accounts[0] });
      setStatus("✅ Interviewer authorized!");
    } catch (err) {
      setStatus("❌ Error: " + err.message);
    }
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Admin: Add Interviewer</h2>
      <input
        type="text"
        className="border px-2 py-1 w-full mb-2"
        placeholder="Enter interviewer wallet address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={handleAdd}>
        Add Interviewer
      </button>
      <p className="mt-2">{status}</p>
    </div>
  );
}

export default AdminDashboard;
