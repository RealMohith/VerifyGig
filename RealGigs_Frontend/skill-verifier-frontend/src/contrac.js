// src/contract.js
export const CONTRACT_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "skillId",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "worker",
          "type": "address"
        }
      ],
      "name": "SkillRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "skillId",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "worker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "interviewer",
          "type": "address"
        }
      ],
      "name": "SkillVerified",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "allSkillIds",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "interviewer",
          "type": "address"
        }
      ],
      "name": "authorizeInterviewer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "authorizedInterviewers",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllInterviewers",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_skillId",
          "type": "string"
        }
      ],
      "name": "getSkillVerification",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "interviewerList",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_skillId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_skillName",
          "type": "string"
        }
      ],
      "name": "requestSkillVerification",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "skillFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "skills",
      "outputs": [
        {
          "internalType": "string",
          "name": "skillId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "skillName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "worker",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "interviewer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "verified",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "notes",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "feePaid",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_skillId",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "_verified",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "_notes",
          "type": "string"
        }
      ],
      "name": "verifySkill",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
export const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;
