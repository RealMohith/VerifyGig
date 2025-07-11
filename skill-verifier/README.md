# 🔐 SkillVerifier Smart Contract

This is the backend blockchain logic for the **Blockchain Skill Verifier** system built for hackathons and skill validation.

## 📦 Tech Stack

- **Solidity** — smart contract logic
- **Hardhat** — local Ethereum development
- **Ganache CLI** — local blockchain simulation
- **MetaMask** — wallet integration for testing

## 🧠 Core Idea

This contract records verifiable skill claims on-chain, approved by authorized interviewers. Once verified, these skills become tamper-proof credentials.

## 📄 Smart Contract Structure

```solidity
struct SkillRecord {
  string skillId;
  string skillName;
  address worker;
  address interviewer;
  uint256 timestamp;
  bool verified;
  string notes;
}
