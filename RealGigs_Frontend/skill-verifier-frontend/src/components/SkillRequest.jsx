import React, { useState } from "react";
import { getContractInstance } from "../utils/contract";
import Web3 from "web3";

const SkillRequest = ({ walletAddress }) => {
  const [skillId, setSkillId] = useState("");
  const [skillName, setSkillName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    if (!skillId || !skillName) {
      alert("Please enter both Skill ID and Skill Name");
      return;
    }

    const contract = await getContractInstance();

    try {
      const web3 = new Web3(window.ethereum);
      const ethValue = web3.utils.toWei("0.01", "ether"); // 0.01 ETH

      await contract.methods
        .requestSkillVerification(skillId, skillName)
        .send({ from: walletAddress, value: ethValue });

      setStatus(`✅ Skill verification requested for ${skillName}`);
    } catch (err) {
      console.error(err);
      setStatus("❌ Transaction failed");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>📌 Request Skill Verification</h2>
      <input
        type="text"
        placeholder="Skill ID (e.g. SKILL_JS_ADV_001)"
        value={skillId}
        onChange={(e) => setSkillId(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Skill Name (e.g. JavaScript Advanced)"
        value={skillName}
        onChange={(e) => setSkillName(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>💸 Request & Pay 0.01 ETH</button>
      <p>{status}</p>
    </div>
  );
};

export default SkillRequest;
