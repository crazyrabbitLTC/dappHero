import React, { Fragment, useEffect } from 'react'
import {
  useContractInstance,
  useGetMethods,
} from './utils/generalContract'
import FunctionViewStatic from './components/FunctionViewStatic'
import FunctionViewArgs from './components/FunctionViewArgs'
import abi from './utils/tokenABI'
import _ from 'lodash'

//This should come from the database
let contractAbiMock = abi.abi //ABI for ERC20 compatible tokens.
let contractAddressMock = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' //Wrapped ETHer on Mainnet

let contractAbi = contractAbiMock
let contractAddress = contractAddressMock

function Web3ContractContainer(props) {
  const { injected, modules } = props
  const { connected, accounts, lib } = injected
  let instance = null
  let methods = null
  let tearDown = []

  useEffect(() => {
    const runTearDown = () => {
      tearDown.map(func => {
        func()
      })
    }
    return runTearDown
  }, [])

  if (connected && accounts.length > 0) {
    instance = useContractInstance(contractAbi, contractAddress, lib)
    methods = useGetMethods(contractAbi, lib)
  }

  //There must be a better way to filter for the method name to avoid duplicates
  function filterModules(modules) {
    const tracker = new Set()
    const filtered = modules.filter(el => {
      let exists = tracker.has(el.requestString.slice(2, 3)[0])
      if (!exists) {
        tracker.add(el.requestString.slice(2, 3)[0])
        return true
      }
      return false
    })
    return filtered
  }

  let reducedModules = filterModules(modules)

  const reducer = (module, methods, index) => {
    const { element, requestString, requestStringIndex } = module
    const request = requestString[requestStringIndex + 1]
    const method = methods.find(method => {
      return method.name === request
    })

    if (method && method.constant && method.arguments.length === 0) {
      return (
        <FunctionViewStatic
          element={element}
          method={method}
          instance={instance}
          key={`${requestString}-${index}`}
          injected={injected}
          tearDown={tearDown}
          requestString={requestString}
          request={request}
          modules={modules}
        ></FunctionViewStatic>
      )
    }

    if (method && method.constant && method.arguments.length > 0) {
      return (
        <FunctionViewArgs
          element={element}
          method={method}
          instance={instance}
          key={`${requestString}-${index}`}
          injected={injected}
          tearDown={tearDown}
          requestString={requestString}
          request={request}
          modules={modules}
        ></FunctionViewArgs>
      )
    }

    if (method && !method.constant) {
      return null
    }
  }

  if (instance && methods) {
    return (
      <Fragment>
        {reducedModules.map((module, index) => {
          return reducer(module, methods, index)
        })}
      </Fragment>
    )
  } else {
    return null
  }
}

export default Web3ContractContainer
