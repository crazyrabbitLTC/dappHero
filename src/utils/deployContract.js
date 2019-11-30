


import Web3 from "web3";

import getGasPrice from "./getGasPrice";

//Thanks to Santiago Palladino and his book 'Ethereum for Web Developers' and the OpenZeppelin Team!
const deployContract = async (
  web3,
  accounts,
  artifact,
  constructorArguments,
  gasPrice
) => {
  const bytecode = artifact.bytecode;
  const abi = artifact.abi;

  const gasOptions = {
    1: "fastest",
    2: "fast",
    3: "standard",
    4: "safelow"
  }

  let contract = new web3.eth.Contract(abi, null, {
    data: bytecode
  });
  let instance;

  try {
    const web3GasPrice = await web3.eth.getGasPrice();
    const oracleGasPrice = await getGasPrice(gasOptions[gasPrice]);

    const gasPrice = oracleGasPrice || web3GasPrice;

    let gas = await contract
      .deploy({ arguments: constructorArguments })
      .estimateGas();

    let lastBlock = await web3.eth.getBlock("latest");
    let limit = lastBlock.gasLimit;
    gas = Math.min(limit - 1, Math.ceil(gas * 1.2));

    instance = await contract
      .deploy({ arguments: constructorArguments })
      .send({ from: accounts[0], gas, gasPrice });
    console.log(instance.options.address);
  } catch (error) {
    console.log(error);
  }

  return instance;
};

export default deployContract;
