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
  isValidAddress,
} from './utils/tokenFunctions'
import {
  getEvents,
  getViewFunctions,
  getFunctions,
  getFuncRequirements,
} from './utils/generalContract'
import erc20 from './utils/tokenABI'
import _ from 'lodash'

let contractAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

function ERC20Container(props) {
  const { injected, request, index } = props
  const { connected, accounts, lib } = injected
  const { el, requestString } = request
  const [txReceipt, setTxReceipt] = useState({})
  const [events, setEvents] = useState([])
  const [viewFunctions, setViewFunctions] = useState([])
  const [functions, setFunctions] = useState([])

  //let contractAddress = document.getElementById('web3-contractAddress').textContent || '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

  //   document.addEventListener('click', function(e) {
  //     e = e || window.event;
  //     var target = e.target || e.srcElement,
  //         text = target.textContent || target.innerText;
  //         console.log("The element: ", target, " The Text: ", text);
  // }, false);

  let foundContainer = document.getElementById('web3-configBox')
  //foundContainer.style.display = 'none'
  foundContainer = foundContainer.textContent
  foundContainer = JSON.parse(foundContainer)
  //console.log('Found: ', foundContainer['contractAddress'])

  contractAddress = foundContainer['contractAddress']

  const tokenStateDefault = {
    instance: {},
    name: 'default',
    symbol: 'default2',
    totalSupply: 0,
    decimals: 0,
    userBalance: 0,
    events: [],
    viewFunctions: [],
    functions: [],
  }

  const [token, setToken] = useState(tokenStateDefault)
  const [contractFunctions, setContractFunctions] = useState({})

  useEffect(() => {
    const viewFunctions = getViewFunctions(erc20.abi)
    const functions = getFunctions(erc20.abi)

    setContractFunctions({
      viewFunctions,
      functions,
    })
    //console.log(viewFunctions)
  }, [erc20])

  useEffect(() => {
    // flashTxBar(false)
    const loadToken = async contractAddress => {
      let isValid = await isValidAddress(lib, contractAddress)
      if (!isValid) {
        return null
      }

      const instance = new lib.eth.Contract(
        erc20.abi,
        contractAddress,
      )
      const viewFunctions = getViewFunctions(erc20.abi)
      const functions = getFunctions(erc20.abi)
      setToken({
        instance,
        events,
        viewFunctions,
        functions,
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

  const subscribeToTransfer = async () => {}

  const subscribeToApproval = async () => {}

  //Sort the requested components
  const reducer = request => {
    switch (request.method) {
      case 'sendButton':
        return null
        // <SendButton
        //   handleSubmit={handleSubmit}
        //   domElement={request.el}
        //   name={token.name}
        //   injected={injected}
        //   key={index}
        // ></SendButton>
        break
      default:
        return null
    }
  }

  //Do nothing if tokenInstance is not ready.

  if (accounts.length > 0 && token.instance && connected) {
    console.log(token.viewFunctions)
    return (
      <div>
        <div>View Functions</div>
      </div>
    )
  } else {
    return null
  }
  // if (accounts.length > 0 && token.instance && connected) {
  //   return reducer({
  //     method: requestString[2],
  //     el,
  //     requestString,
  //   })
  // } else {
  //   return null
  // }
}

export default ERC20Container
