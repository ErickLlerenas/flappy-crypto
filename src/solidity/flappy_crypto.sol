// https://solidity-by-example.org/payable/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract FlappyCrypto {

    address payable public owner;
    uint fee = 5000000000000000000;

    constructor() payable {
        owner = payable(msg.sender);
    }

    function deposit() public payable {}

    function withdraw(uint _amount) public {
        if(_amount>=fee){
            payable(msg.sender).transfer(_amount - fee);
            owner.transfer(fee);
        }
    }

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

}