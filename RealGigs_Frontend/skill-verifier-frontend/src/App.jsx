// src/App.jsx
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./contrac";
import AdminDashboard from "./AdminDashboard";
import InterviewerDashboard from "./InterviewerDashboard";
import WorkerDashboard from "./WorkerDashboard";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const loadBlockchain = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        const deployedContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

        setAccount(accounts[0]);
        setContract(deployedContract);

        const adminAddress = await deployedContract.methods.admin().call();

        if (accounts[0].toLowerCase() === adminAddress.toLowerCase()) {
          setRole("admin");
        } else {
          const isInterviewer = await deployedContract.methods.authorizedInterviewers(accounts[0]).call();
          if (isInterviewer) setRole("interviewer");
          else setRole("worker");
        }
      } else {
        alert("Please install MetaMask to use this dApp");
      }
    };

    loadBlockchain();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🎓 RealGigs Skill Verifier</h1>
      <p style={{ textAlign: "center" }}>Connected account: {account}</p>
      {role === "admin" && <AdminDashboard contract={contract} account={account} />}
      {role === "interviewer" && <InterviewerDashboard contract={contract} account={account} />}
      {role === "worker" && <WorkerDashboard contract={contract} account={account} />}
    </div>
  );
}

export default App;
