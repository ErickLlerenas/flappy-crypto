// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract FlappyCrypto {
    address payable public owner;
    uint256 public withdraw_fee = 1 * 10**16;
    string private private_key;

    constructor() payable {
        owner = payable(msg.sender);
        private_key = "flappy-crypto-private_key";
    }

    function deposit() public payable {}

    function withdraw(uint256 _amount, string memory _private_key) public {
        if (
            keccak256(abi.encodePacked(_private_key)) ==
            keccak256(abi.encodePacked(private_key))
        ) {
            if (_amount >= withdraw_fee) {
                payable(msg.sender).transfer(_amount - withdraw_fee);
                owner.transfer(withdraw_fee);
            } else revert();
        } else revert();
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
