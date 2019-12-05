import React, { useState, useEffect, Fragment } from 'react'
import Web3ERC20TotalSupply from './Web3ERC20TotalSupply'
import Web3ERC20TokenName from './Web3ERC20TokenName'
import Web3ERC20TokenSymbol from './Web3ERC20Symbol'
import Web3ERC20TokenDecimals from './Web3ERC20TokenDecimals'
import Web3ERC20TokenBalance from './Web3ERC20TokenBalance'
let abi = {
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'subtractedValue',
          type: 'uint256',
        },
      ],
      name: 'decreaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'addedValue',
          type: 'uint256',
        },
      ],
      name: 'increaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals',
          type: 'uint8',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
}

let contractAddress = '0x395A29cce13a8768326B4901dcac730b0210b3eF'

function Web3ERC20(props) {
  const { injected, request, index } = props
  const { connected, accounts, lib } = injected

  const { el, requestString } = request

  const [txReceipt, setTxReceipt] = useState({})

  const defaultToken = {
    instance: {},
    name: 'default',
    symbol: 'default2',
    totalSupply: 0,
    decimals: 0,
    userBalance: 0,
  }
  const [token, setToken] = useState(defaultToken)
  const [formValue, setFormValue] = useState(null)

  useEffect(() => {
    const loadToken = async () => {
      const instance = new lib.eth.Contract(abi.abi, contractAddress)

      const name = await getTokenName(instance)
      const symbol = await getTokenSymbol(instance)
      const totalSupply = await getTotalSupply(instance)
      const decimals = await getTokenDecimals(instance)
      const userBalance = await getBalance(instance, accounts[0])

      setToken({
        instance,
        name,
        symbol,
        totalSupply,
        decimals,
        userBalance,
      })
    }

    if (connected) {
      loadToken()
    }
  }, [connected])

  const handleFormEntry = (el) => {

  }

  const transfer = async (destination, amount) => {
    let tx
    let gasPrice
    let gas

    try {
      gas = await instance.methods
        .transfer(destination, amount)
        .estimateGas({ from: accounts[0] })

      let lastBlock = await web3.eth.getBlock('latest')
      let limit = lastBlock.gasLimit
      gas = Math.min(limit - 1, Math.ceil(gas * 1.2))

      gasPrice = await lib.eth.getGasPrice()
      tx = await instance.methods
        .transfer(destination, amount)
        .send({ from: accounts[0], gas, gasPrice })

      setTxReceipt(txReceipt)
      console.log('Transfer completed')
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

  const subscribeToTransfer = async () => {}

  const subscribeToApproval = async () => {}

  const reducer = request => {
    switch (request.method) {
      case 'name':
        return (
          <Web3ERC20TokenName
            domElement={request.el}
            name={token.name}
            injected={injected}
            key={index}
          ></Web3ERC20TokenName>
        )
        break

      case 'symbol':
        return (
          <Web3ERC20TokenSymbol
            domElement={request.el}
            symbol={token.symbol}
            injected={injected}
            key={index}
          ></Web3ERC20TokenSymbol>
        )
        break

      case 'decimals':
        return (
          <Web3ERC20TokenDecimals
            domElement={request.el}
            decimals={token.decimals}
            injected={injected}
            key={index}
          ></Web3ERC20TokenDecimals>
        )
        break

      case 'balance':
        return (
          <Web3ERC20TokenBalance
            domElement={request.el}
            balance={token.userBalance}
            injected={injected}
            key={index}
            request={request}
          ></Web3ERC20TokenBalance>
        )
        break

      case 'supply':
        return (
          <Web3ERC20TotalSupply
            domElement={request.el}
            totalSupply={token.totalSupply}
            injected={injected}
            key={index}
          ></Web3ERC20TotalSupply>
        )
        break

      default:
        return <Fragment></Fragment>
    }
  }

  return reducer({
    method: requestString[2],
    el,
    requestString,
  })
}
export default Web3ERC20
