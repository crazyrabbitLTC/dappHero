pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract ERC20Contract is ERC20, ERC20Detailed {
    constructor(uint256 initialSupply, string memory name, string memory symbol) ERC20Detailed(name, symbol, 18) public {
        _mint(msg.sender, initialSupply);
    }
}