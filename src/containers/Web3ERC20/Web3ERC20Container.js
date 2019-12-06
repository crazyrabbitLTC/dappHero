import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
} from 'react'
import Web3ERC20TotalSupply from './Web3ERC20TotalSupply'
import Web3ERC20TokenName from './Web3ERC20TokenName'
import Web3ERC20TokenSymbol from './Web3ERC20Symbol'
import Web3ERC20TokenDecimals from './Web3ERC20TokenDecimals'
import Web3ERC20TokenBalance from './Web3ERC20TokenBalance'
import Web3ERC20InputValue from './Web3ERC20InputValue'
import Web3ERC20InputAddress from './Web3ERC20InputAddress'
import SendButton from './SendButton/SendButton'

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

let contractAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

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

  const [value, setValue] = useState(0)
  const [recipient, setRecipient] = useState(null)

  useEffect(() => {
    // flashTxBar(false)
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

  const handleFormEntryValue = useCallback(data => {
    console.log('The Bubbled Data: ', data)
    setValue(data)
  })

  const handleFormEntryAddress = useCallback(data => {
    console.log('The bubbled data: ', data)
    setRecipient(data)
  })

  //need to figure out what is going on here.
  const handleSubmit = () => {
    //validation of data needed

    const recipient = document.querySelector(
      'input.web3-erc20-inputaddress',
    )
    const amount = document.querySelector(
      'input.web3-erc20-inputvalue',
    )
    console.log('In handle submit!', recipient, '    ', amount)
    //transfer(token.instance, formValue.recipient, formValue.amount)
    transfer(recipient.value, Number(amount.value))
  }

  const transfer = async (destination, amount) => {
    let tx
    let gasPrice
    let gas
    const instance = new props.injected.lib.eth.Contract(
      abi.abi,
      contractAddress,
    )
    const accounts = props.injected.accounts
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

      let lastBlock = await lib.eth.getBlock('latest')
      let limit = lastBlock.gasLimit
      gas = Math.min(limit - 1, Math.ceil(gas * 1.2))

      gasPrice = await lib.eth.getGasPrice()
      tx = await instance.methods
        .transfer(destination, amount)
        .send({ from: accounts[0], gas, gasPrice })

      flashTxBar(true)
      setTxReceipt(txReceipt)
      console.log('Transfer completed')
    } catch (error) {
      console.error('Error in making the ERC20 Transfer: ', error)
    }
  }

  const flashTxBar = toggle => {
    const bar = document.querySelector('div.web3-erc20-txbar')
    bar.style.visibility = toggle ? 'visible' : 'hidden'
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
      case 'sendButton':
        return (
          <SendButton
            handleSubmit={handleSubmit}
            domElement={request.el}
            name={token.name}
            injected={injected}
            key={index}
          ></SendButton>
        )
        break
      case 'inputAddress':
        return (
          <Web3ERC20InputAddress
            handleFormEntry={handleFormEntryAddress}
            domElement={request.el}
            name={token.name}
            injected={injected}
            key={index}
          ></Web3ERC20InputAddress>
        )
        break
      case 'inputValue':
        return (
          <Web3ERC20InputValue
            handleFormEntry={handleFormEntryValue}
            domElement={request.el}
            name={token.name}
            injected={injected}
            key={index}
          ></Web3ERC20InputValue>
        )
        break

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
  if (accounts.length > 0 && token.instance && connected) {
    return reducer({
      method: requestString[2],
      el,
      requestString,
    })
  } else {
    return null
  }

}
export default Web3ERC20
