import Web3 from "web3";
import ERC20Contract from "../utils/ERC20Contract.json";

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

    gas = await contract.deploy({ arguments: tokenArguments }).estimateGas();
    console.log("GAS: ", gas);

    instance = await contract
      .deploy({ arguments: tokenArguments })
      .send({ from: accounts[0], gas });
    console.log(instance.options.address);
  } catch (error) {
    console.log(error)
  }
};

export default deployContract;
