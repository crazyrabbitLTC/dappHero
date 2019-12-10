import React, { useState, useEffect, useCallback } from 'react'
import TotalSupply from './components/TotalSupply'
import TokenName from './components/TokenName'
import TokenSymbol from './components/Symbol'
import TokenDecimals from './components/TokenDecimals'
import TokenBalance from './components/TokenBalance'
import InputValue from './components/InputValue'
import InputAddress from './components/InputAddress'
import SendButton from './components/SendButton/SendButton'
import {
  transfer,
  getBalance,
  getTokenName,
  getTokenSymbol,
  getTokenDecimals,
  getTotalSupply,
  isValidAddress
} from './utils/tokenFunctions'
import erc20 from './utils/tokenABI'

let contractAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

function ERC20Container(props) {
  const { injected, request, index } = props
  const { connected, accounts, lib } = injected
  const { el, requestString } = request
  const [txReceipt, setTxReceipt] = useState({})

  //let contractAddress = document.getElementById('web3-contractAddress').textContent || '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
  
  let foundContainer = document.getElementById('web3-configBox')
  foundContainer.style.display = "none";
  foundContainer = foundContainer.textContent;
  foundContainer = JSON.parse(foundContainer);
  console.log("Found: ", foundContainer["contractAddress"])

  contractAddress = foundContainer["contractAddress"];
  //contractAddress = foundContainer["contractAddress"];
  
  const tokenStateDefault = {
    instance: {},
    name: 'default',
    symbol: 'default2',
    totalSupply: 0,
    decimals: 0,
    userBalance: 0,
  }

  const [token, setToken] = useState(tokenStateDefault)
  const [value, setValue] = useState(0)
  const [recipient, setRecipient] = useState(null)

  useEffect(() => {
    // flashTxBar(false)
    const loadToken = async (contractAddress) => {

      let isValid = await isValidAddress(lib, contractAddress);
      if(!isValid){
        return null
      }

      const instance = new lib.eth.Contract(
        erc20.abi,
        contractAddress,
      )

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
      loadToken(contractAddress)
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

  const handleSubmit = async () => {
    const recipient = document.querySelector(
      'input.web3-erc20-inputaddress',
    )
    const amount = document.querySelector(
      'input.web3-erc20-inputvalue',
    )

    console.log('In handle submit!', recipient, '    ', amount)

    const tx = await transfer(
      recipient.value,
      Number(amount.value),
      lib,
      accounts,
      erc20.abi,
      contractAddress,
    )

    console.log('The TX: ', tx)
  }

  const flashTxBar = toggle => {
    const bar = document.querySelector('div.web3-erc20-txbar')
    bar.style.visibility = toggle ? 'visible' : 'hidden'
  }

  const subscribeToTransfer = async () => {}

  const subscribeToApproval = async () => {}

  //Sort the requested components
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
          <InputAddress
            handleFormEntry={handleFormEntryAddress}
            domElement={request.el}
            name={token.name}
            injected={injected}
            key={index}
          ></InputAddress>
        )
        break
      case 'inputValue':
        return (
          <InputValue
            handleFormEntry={handleFormEntryValue}
            domElement={request.el}
            name={token.name}
            injected={injected}
            key={index}
          ></InputValue>
        )
        break

      case 'name':
        return (
          <TokenName
            domElement={request.el}
            name={token.name}
            injected={injected}
            key={index}
          ></TokenName>
        )
        break

      case 'symbol':
        return (
          <TokenSymbol
            domElement={request.el}
            symbol={token.symbol}
            injected={injected}
            key={index}
          ></TokenSymbol>
        )
        break

      case 'decimals':
        return (
          <TokenDecimals
            domElement={request.el}
            decimals={token.decimals}
            injected={injected}
            key={index}
          ></TokenDecimals>
        )
        break

      case 'balance':
        return (
          <TokenBalance
            domElement={request.el}
            balance={token.userBalance}
            injected={injected}
            key={index}
            request={request}
          ></TokenBalance>
        )
        break

      case 'supply':
        return (
          <TotalSupply
            domElement={request.el}
            totalSupply={token.totalSupply}
            injected={injected}
            key={index}
          ></TotalSupply>
        )
        break

      default:
        return null
    }
  }

  //Do nothing if tokenInstance is not ready.
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

export default ERC20Container
