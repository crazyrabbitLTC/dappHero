import React, { useState, useEffect, useCallback } from 'react'
import {
  useContractInstance,
  useGetMethods,
} from './utils/generalContract'
import abi from './utils/tokenABI'
import _ from 'lodash'

let contractAbi = abi.abi
let contractAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

function Web3ERC20Container(props) {
  const { injected, modules } = props
  const { connected, accounts, lib } = injected
  let instance = null
  let methods = null

  if (connected && accounts.length > 0) {
    instance = useContractInstance(contractAbi, contractAddress, lib)
    methods = useGetMethods(contractAbi, lib);
  }



if(methods) console.log("Methods", methods[4])

  if (instance) {
    return (
      <div>
        <div>View Functions Bitches!</div>

      </div>
    )
  } else {
    return null
  }
}

export default Web3ERC20Container
