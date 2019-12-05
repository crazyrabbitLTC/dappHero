pragma solidity ^0.5.0;

import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20Detailed.sol";

contract MyToken is Initializable, ERC20, ERC20Detailed {
    function initialize() public initializer  {
        ERC20Detailed.initialize("DappHero", "DHR", 18);
        _mint(msg.sender, 1000);
    }
}