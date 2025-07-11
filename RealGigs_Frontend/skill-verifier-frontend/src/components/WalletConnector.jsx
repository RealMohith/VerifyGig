import React, { useState, useEffect } from "react";

const WalletConnector = ({ onWalletConnected }) => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        onWalletConnected(accounts[0]);
      } catch (error) {
        console.error("User denied wallet connection", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
        onWalletConnected(accounts[0]);
      });
    }
  }, []);

  return (
    <div>
      {account ? (
        <p>🔐 Connected: {account}</p>
      ) : (
        <button onClick={connectWallet}>🔗 Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnector;
