import React, { Fragment, useState } from 'react'
import {
  useContractInstance,
  useGetMethods,
} from './utils/generalContract'
import FunctionViewStatic from './components/FunctionViewStatic'
import abi from './utils/tokenABI'
import _ from 'lodash'

let contractAbi = abi.abi
let contractAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

function Web3ERC20Container(props) {
  const { injected, modules } = props
  const { connected, accounts, lib } = injected
  let instance = null
  let methods = null

  // const [tearDown, setTearDown] = useState([])
 let tearDown = []


  console.log("What is in tearDwon? ", tearDown)

  if (connected && accounts.length > 0) {
    instance = useContractInstance(contractAbi, contractAddress, lib)
    methods = useGetMethods(contractAbi, lib)
  }

  const reducer = (module, methods, index) => {
    const { element, requestString, requestStringIndex } = module
    const request = requestString[requestStringIndex + 1]
    const method = methods.find(method => {
      return method.name === request
    })

    if (method && method.arguments && method.arguments.length === 0) {
      return (
        <FunctionViewStatic
          element={element}
          method={method}
          instance={instance}
          key={`${requestString}-${index}`}
          injected={injected}
          tearDown={tearDown}
        ></FunctionViewStatic>
      )
    }
  }

  if (instance && methods) {
    return (
      <Fragment>
        {modules.map((module, index) => {
          return reducer(module, methods, index)
        })}
      </Fragment>
    )
  } else {
    return null
  }
}

export default Web3ERC20Container
