const hre = require("hardhat");

async function main() {

  const contract = await hre.ethers.deployContract("Swisstronik", ["What a great time to feel alive with Swisstronik"]);

  await contract.waitForDeployment();

  console.log(`Swisstronik contract deployed to ${contract.target}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
