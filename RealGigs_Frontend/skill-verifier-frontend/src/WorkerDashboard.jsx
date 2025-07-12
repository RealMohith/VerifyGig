// src/WorkerDashboard.jsx
import React, { useState } from "react";

function WorkerDashboard({ contract, account }) {
  const [skillId, setSkillId] = useState("");
  const [skillName, setSkillName] = useState("");

  const submitSkill = async () => {
    try {
      const fee = await contract.methods.skillFee().call();
      await contract.methods.requestSkillVerification(skillId, skillName).send({
        from: account,
        value: fee,
      });
      alert("✅ Skill requested!");
    } catch (err) {
      alert("❌ Error submitting skill: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>👨‍💻 Worker Dashboard</h2>
      <input
        type="text"
        placeholder="Skill ID"
        value={skillId}
        onChange={(e) => setSkillId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Skill Name"
        value={skillName}
        onChange={(e) => setSkillName(e.target.value)}
      />
      <button onClick={submitSkill}>Submit for Verification</button>
    </div>
  );
}

export default WorkerDashboard;
