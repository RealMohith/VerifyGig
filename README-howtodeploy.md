# 📦 How to Deploy and Run RealGigs Locally

This guide walks you through compiling, deploying, and running the RealGigs app on your local machine using Hardhat and Vite.

---

## 🧱 1. Install Dependencies

```bash
git clone https://github.com/your-username/RealGigs.git
cd RealGigs
npm install
```

Make sure you have **Node.js**, **npm**, and **Hardhat** installed globally.

---

## 🛠 2. Compile the Smart Contract

```bash
npx hardhat compile
```

This will generate the ABI and bytecode inside the `artifacts/` folder.

---

## ⚙️ 3. Start Local Ethereum Blockchain

```bash
npx hardhat node
```

This launches a local blockchain at `http://127.0.0.1:8545` with 20 test accounts.

---

## 🚀 4. Deploy the Smart Contract

Open a new terminal (keep the node running):

```bash
npx hardhat run scripts/deploy.js --network localhost
```

Copy the deployed contract address shown in the terminal.

---

## 🔧 5. Configure the Frontend

Edit `src/contrac.js`:

```js
export const CONTRACT_ADDRESS = "0xYOUR_DEPLOYED_ADDRESS";
export const CONTRACT_ABI = [ ... ]; // ABI from compilation
```

You can get the ABI from:
```
artifacts/contracts/SkillVerifier.sol/SkillVerifier.json
```

---

## 🌐 6. Start the Frontend (Vite)

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

Make sure MetaMask is connected to **Localhost 8545** and imported one of the Hardhat test accounts.

---

## 🧪 7. Test the App

- Connect MetaMask and load the app
- Submit a skill (worker)
- Verify a skill (interviewer)
- View recruiter page at `/recruiter` (no wallet needed)

---

## 🖧 8. (Optional) LAN Access for Recruiter

- Replace Web3 provider in `src/RecruiterViewer.jsx`:

```js
const web3 = new Web3("http://192.168.X.X:8545"); // Your system's IP
```

- Run frontend with LAN enabled:

```bash
npm run dev -- --host
```

- Open from another device: `http://192.168.X.X:5173/recruiter`

✅ No MetaMask required

---

## ✅ Summary

| Step | What to Do                            |
|------|----------------------------------------|
| 1    | Install dependencies                   |
| 2    | Compile smart contracts                |
| 3    | Run local Hardhat blockchain           |
| 4    | Deploy contract                        |
| 5    | Update frontend with contract info     |
| 6    | Start frontend server                  |
| 7    | Use app via MetaMask or Recruiter view |
| 8    | Optional LAN access for demo/view only |