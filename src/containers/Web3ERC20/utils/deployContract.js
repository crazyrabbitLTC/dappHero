import Web3 from "web3";
import ERC20Contract from "../utils/ERC20Contract.json";
import getGasPrice from "./getGasPrice"

//Thanks to Santiago Palladino and his book 'Ethereum for Web Developers' and the OpenZeppelin Team!
const deployContract = async (web3, accounts) => {
 
  const bytecode = ERC20Contract.bytecode;
  const abi = ERC20Contract.abi;
  let gas = 1e6;
  const tokenArguments = [ 1000, "testToken", "tt"];
  let contract = new web3.eth.Contract(abi, null, {
    data: bytecode
  });
  let instance;

  try {
    console.log("in deploy contract")

    const web3GasPrice = await web3.eth.getGasPrice();
    const oracleGasPrice = await getGasPrice();

    const gasPrice = oracleGasPrice || web3GasPrice;

    gas = await contract.deploy({ arguments: tokenArguments }).estimateGas();
    console.log("GAS: ", gas);

    let lastBlock = await web3.eth.getBlock('latest');
    let limit = lastBlock.gasLimit;
    gas = Math.min(limit-1, Math.ceil(gas*1.2));

    instance = await contract
      .deploy({ arguments: tokenArguments })
      .send({ from: accounts[0], gas, gasPrice });
    console.log(instance.options.address);
  } catch (error) {
    console.log(error)
  }
};

export default deployContract;
