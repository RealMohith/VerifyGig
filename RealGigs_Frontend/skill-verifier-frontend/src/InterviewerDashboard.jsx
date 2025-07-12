// src/InterviewerDashboard.jsx
import React, { useEffect, useState } from "react";

function InterviewerDashboard({ contract, account }) {
  const [skills, setSkills] = useState([]);
  const [notes, setNotes] = useState("");

useEffect(() => {
  const fetchSkills = async () => {
    try {
      const ids = await contract.methods.getAllSkillIds().call();



      if (!ids || ids.length === 0) {
        console.log("No skills submitted yet.");
        setSkills([]);
        return;
      }

      const pending = [];

      for (let id of ids) {
        if (!id) continue; // skip invalid IDs
        const skill = await contract.methods.skills(id).call();
        if (!skill.verified && skill.interviewer === "0x0000000000000000000000000000000000000000") {
          pending.push(skill);
        }
      }

      setSkills(pending);
    } catch (err) {
      console.error("❌ Error fetching skills:", err);
      setSkills([]);
    }
  };

  fetchSkills();
}, [contract]);


  const verify = async (id) => {
    try {
      await contract.methods.verifySkill(id, true, notes).send({ from: account });
      alert("✅ Verified & Paid");
    } catch (err) {
      alert("❌ Error verifying skill: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧑‍💼 Interviewer Dashboard</h2>
      {skills.map((skill) => (
        <div key={skill.skillId}>
          <h4>{skill.skillName} (ID: {skill.skillId})</h4>
          <p>By: {skill.worker}</p>
          <textarea placeholder="Notes" onChange={(e) => setNotes(e.target.value)} />
          <br />
          <button onClick={() => verify(skill.skillId)}>Verify & Get Paid</button>
        </div>
      ))}
    </div>
  );
}

export default InterviewerDashboard;
