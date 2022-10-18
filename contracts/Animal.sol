//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract Animal {

    uint256 energy = 0;
    bool canWalk = false;
    bool canSwim = false;
    
    function eat() internal maxEnergy {
        energy += 10;
    }

    function drink() internal maxEnergy{
        energy += 5;
    }

    function walk() internal checkEnergy{
        require(canWalk == true , "Your animal can't walk");
        energy -= 3;
    }

    function swim() internal checkEnergy{
        require(canSwim == true , "Your animal can't swim");
        energy -= 3;
    }

    function showEnergy() internal view returns(uint256) {
        return energy;
    }

    modifier checkEnergy() {
        require(energy > 3 , "Low energy");
        _;
    }

    modifier maxEnergy() {
        require(energy < 20 , "Max energy");
        _;
    }
}
