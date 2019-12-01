import ERC20Contract from "../utils/ERC20Contract.json";

//Thanks to Santiago Palladino and his book 'Ethereum for Web Developers' and the OpenZeppelin Team!
const deployedContract = async (web3, address) => {
  let contract = new web3.eth.Contract(ERC20Contract.abi, address);

  return contract;
};

export default deployedContract;
