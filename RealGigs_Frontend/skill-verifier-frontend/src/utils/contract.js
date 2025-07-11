import Web3 from "web3";
import ABI from "../abi/SkillVerifier.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

export const getContractInstance = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(ABI.abi, CONTRACT_ADDRESS);
    return contract;
  } else {
    alert("Please install MetaMask!");
    return null;
  }
};
