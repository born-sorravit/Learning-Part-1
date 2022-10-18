//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import './Animal.sol';

contract Dog is Animal{
    
    constructor() {
        Animal.canWalk = true;
        Animal.canSwim = true;
    }

    function eatFood() public returns(uint256) {
        Animal.eat();
        return Animal.showEnergy();
    }

    function dinkWater() public returns(uint256) {
        Animal.drink();
        return Animal.showEnergy();
    }

    function walking() public {
        Animal.walk();
    }

    function swimming() public {
        Animal.swim();
    }

    function displayEnergy() public view returns(uint256) {
        return Animal.showEnergy();
    }

}
