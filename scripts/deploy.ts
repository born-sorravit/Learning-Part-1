
import { ethers } from "hardhat";

async function main() {

  const Animal = await ethers.getContractFactory('Animal');
  const animal = await Animal.deploy();

  await animal.deployed()

  console.log('Contract Address :', animal.address);


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});