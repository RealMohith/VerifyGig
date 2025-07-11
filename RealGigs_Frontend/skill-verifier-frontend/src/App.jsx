import React, { useState } from "react";
import WalletConnector from "./components/WalletConnector";
import SkillRequest from "./components/SkillRequest";

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧾 Blockchain Skill Verifier</h1>
      <WalletConnector onWalletConnected={setWalletAddress} />
      {walletAddress && <SkillRequest walletAddress={walletAddress} />}
    </div>
  );
};

export default App;
