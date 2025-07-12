import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./contract";
import AdminDashboard from "./AdminDashboard";
import InterviewerDashboard from "./InterviewerDashboard";
import WorkerDashboard from "./WorkerDashboard";

function App() {
  const [role, setRole] = useState("loading");

  useEffect(() => {
    const detectRole = async () => {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
      const accounts = await web3.eth.getAccounts();
      const user = accounts[0];

      const admin = await contract.methods.admin().call();
      if (user.toLowerCase() === admin.toLowerCase()) {
        setRole("admin");
      } else {
        const isInterviewer = await contract.methods.authorizedInterviewers(user).call();
        if (isInterviewer) {
          setRole("interviewer");
        } else {
          setRole("worker");
        }
      }
    };

    detectRole();
  }, []);

  if (role === "loading") return <div>🔄 Detecting role...</div>;

  return (
    <div className="p-4">
      {role === "admin" && <AdminDashboard />}
      {role === "interviewer" && <InterviewerDashboard />}
      {role === "worker" && <WorkerDashboard />}
    </div>
  );
}

export default App;
