const transfer = async (
  destination,
  amount,
  lib,
  accounts,
  abi,
  contractAddress,
) => {
  let tx
  let gasPrice
  let gas

  const instance = new lib.eth.Contract(abi, contractAddress)

  try {
    console.log(
      'in transfer, the accounst are: ',
      accounts,
      '  ',
      destination,
      '  ',
      amount,
    )

    gas = await instance.methods
      .transfer(destination, amount)
      .estimateGas({ from: accounts[0] })
    gas = Math.min(limit - 1, Math.ceil(gas * 1.2))

    let lastBlock = await lib.eth.getBlock('latest')
    let limit = lastBlock.gasLimit

    gasPrice = await lib.eth.getGasPrice()
    tx = await instance.methods
      .transfer(destination, amount)
      .send({ from: accounts[0], gas, gasPrice })

    return tx
  } catch (error) {
    console.error('Error in making the ERC20 Transfer: ', error)
  }
}


const getBalance = async (instance, address) => {
  try {
    let balance = await instance.methods.balanceOf(address).call()

    return balance
  } catch (error) {
    console.log('Error in Get Balance', error)
  }
}

const getTokenName = async instance => {
  try {
    let name = await instance.methods.name().call()
    return name
  } catch (error) {
    console.log('Error in getTokenName', error)
  }
}

const getTokenSymbol = async instance => {
  try {
    let symbol = await instance.methods.symbol().call()
    return symbol
  } catch (error) {
    console.log('Error in getTokenSymbol', error)
  }
}

const getTokenDecimals = async instance => {
  try {
    let decimals = await instance.methods.decimals().call()
    return decimals
  } catch (error) {
    console.log('Error in getTokenDecimals', error)
  }
}

const getTotalSupply = async instance => {
  try {
    let totalSupply = await instance.methods.totalSupply().call()
    return totalSupply
  } catch (error) {
    console.log('Error in getTotalSupply', error)
  }
}

const isValidAddress = async (lib, address) => {
  if(!lib.utils.isAddress(address)){
    console.error("Address is not a valid Ethereum Address in Web3 Compoment")
    return false;
  }

  let code;
  try {
    code = await lib.eth.getCode(address);
  } catch (error) {
    console.error(error)
  }
  
  if(!code){
    return false;
  }
  return true;
}

export {
  transfer,
  getBalance,
  getTokenName,
  getTokenSymbol,
  getTokenDecimals,
  getTotalSupply,
  isValidAddress,
}
