// src/RecruiterViewer.jsx
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./contrac";

function RecruiterViewer() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const web3 = new Web3("http://192.168.51.150:8545"); // Update if needed
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

        // ✅ Use 'from' field to avoid Web3ValidatorError
        const ids = await contract.methods.getAllSkillIds().call({ from: accounts[0] });

        const verified = [];

        for (let id of ids) {
          const skill = await contract.methods.skills(id).call({ from: accounts[0] });
          if (skill.verified) {
            verified.push({ ...skill, skillId: id });
          }
        }

        setSkills(verified);
        setLoading(false);
      } catch (err) {
        console.error("❌ Failed to load verified skills:", err);
        setError("Blockchain connection failed or skill fetch failed.");
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  if (loading) return <p style={{ padding: "20px" }}>⏳ Loading verified skills...</p>;
  if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 Verified Skills (Recruiter View)</h2>
      {skills.length === 0 && <p>No verified skills yet.</p>}
      {skills.map((skill) => (
        <div key={skill.skillId} style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>
          <h4>✅ {skill.skillName}</h4>
          <p>Skill ID: {skill.skillId}</p>
          <p>Worker: {skill.worker}</p>
          <p>Interviewer: {skill.interviewer}</p>
          <p>Notes: {skill.notes}</p>
          
        </div>
      ))}
    </div>
  );
}

export default RecruiterViewer;
