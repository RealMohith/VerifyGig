# 🎓 RealGigs – Decentralized Skill Verification System

RealGigs is a blockchain-based platform that enables **transparent, tamper-proof skill verification**. Workers can request verifications of their skills, interviewers assess and verify them, and recruiters can view verified data — all powered by Ethereum smart contracts.

---

## 🚀 Demo Overview

- ✅ Worker submits a skill with ETH
- ✅ Interviewer verifies and gets paid
- ✅ Admin manages interviewers
- ✅ Recruiter can view verified skills without login
- ✅ Fully decentralized on Hardhat local blockchain

---

## 🧠 Core Features

### 👨‍💻 Worker
- Submit a skill for verification
- Pay ETH as verification fee
- Track verification status

### 🧑‍⚖️ Interviewer
- View pending skill requests
- Verify or reject with notes
- Automatically receive ETH payout

### 👑 Admin
- Authorize new interviewers
- View list of authorized addresses

### 🔍 Recruiter
- View all verified skills without connecting wallet
- Read-only public interface

---

## 🛠️ Tech Stack

| Layer       | Tech                        |
|-------------|-----------------------------|
| Frontend    | React.js (Vite)             |
| Blockchain  | Solidity + Hardhat          |
| Web3        | Web3.js (with MetaMask)     |
| Wallet      | MetaMask (Injected Web3)    |
| Deployment  | Localhost + LAN Access  (at present)    |

---


## ⚙️ Installation & Running

 pls refer to Readme-howtodeploy.md
---

## 🖧 Multi-System LAN Setup (Recruiter Viewer)

- Start the Hardhat node on one machine (host).
- Find your host's local IP (e.g., `192.168.1.10`).
- In `RecruiterViewer.jsx`, replace:
```js
const web3 = new Web3("http://192.168.1.10:8545");
```
- From any device on same Wi-Fi:
  - Open: `http://192.168.1.10:5173/recruiter`

✅ No wallet required — public view only.

---

## 📄 Smart Contract Overview (`SkillVerifier.sol`)

### 🔐 Roles
- `admin`: Deployer, manages interviewers
- `worker`: Can request skill verification
- `interviewer`: Can verify and earn ETH

### 🔑 Functions
```solidity
authorizeInterviewer(address)          // Admin adds interviewer
requestSkillVerification(id, name)    // Worker submits skill (with ETH)
verifySkill(id, isVerified, notes)    // Interviewer verifies skill
getAllSkillIds()                      // Fetch all submitted skill IDs
getAllInterviewers()                  // List of all authorized interviewers
skills(id)                            // Full skill details
```

---

## 🧪 Sample Workflow

### 🧑 Worker
1. Connect wallet via MetaMask
2. Enter `Skill ID` and `Skill Name`
3. Click “Submit for Verification”
4. Wait for interviewer to verify

### 🧑‍🏫 Interviewer
1. Log in with authorized wallet
2. See pending skill requests
3. Verify or reject with notes
4. Instantly receive ETH reward

### 👑 Admin
1. Log in with deployer wallet
2. Add new interviewers by address
3. View list of authorized interviewers

### 🕵️ Recruiter
1. Visit `/recruiter` route
2. View list of verified skills
3. No wallet needed!

---

## 📄 License

This project is licensed under the MIT License.  
Feel free to use, fork, and contribute!