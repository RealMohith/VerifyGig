const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  const SkillVerifier = await hre.ethers.getContractFactory("SkillVerifier");
  const contract = await SkillVerifier.deploy();

  await contract.waitForDeployment(); // updated line for viem/ethers v6+

  console.log("✅ SkillVerifier deployed at:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
