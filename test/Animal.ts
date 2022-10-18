import { expect } from "chai";
import { ethers } from "hardhat";
import { Dolphin } from "../typechain";

describe("Dog", function () {

  it("function eat : display energy = 10", async function () {
    const DogContract = await ethers.getContractFactory("Dog");
    const dog = await DogContract.deploy();

    await dog.eatFood();
    expect(await dog.displayEnergy()).to.equal(10);
  });

  it("function drink : display energy = 5", async function () {
    const DogContract = await ethers.getContractFactory("Dog");
    const dog = await DogContract.deploy();

    await dog.dinkWater();
    expect(await dog.displayEnergy()).to.equal(5);
  });

  it("function walk with ennergy : display energy -= 3", async function () {
    const DogContract = await ethers.getContractFactory("Dog");
    const dog = await DogContract.deploy();

    await dog.eatFood();
    await dog.walking();
    expect(await dog.displayEnergy()).to.equal(7);
  });

  it("function walk : display low energy", async function () {
    const DogContract = await ethers.getContractFactory("Dog");
    const dog = await DogContract.deploy();
    expect(dog.walking()).to.revertedWith("Low energy");
  });

  // it("function walk : display Your animal can't walk", async function () {
  //   const AnimalContrct = await ethers.getContractFactory("Animal");
  //   const DolphinContract = await ethers.getContractFactory("Dolphin");
  //   const animal = await DolphinContract.deploy();
  //   const dolphin = await DolphinContract.deploy();
  //   await dolphin.eatFood();
  //   // expect(await dolphin.displayEnergy()).to.equal(2);
  //   expect(dolphin.walking()).to.revertedWith("Your animal can't walk");
  // });

  it("function swim with ennergy : display energy -= 3", async function () {
    const DogContract = await ethers.getContractFactory("Dog");
    const dog = await DogContract.deploy();

    await dog.eatFood();
    await dog.walking();
    expect(await dog.displayEnergy()).to.equal(7);
  });

  it("function swim : display low energy", async function () {
    const DogContract = await ethers.getContractFactory("Dog");
    const dog = await DogContract.deploy();
    expect(dog.walking()).to.revertedWith("Low energy");
  });

});