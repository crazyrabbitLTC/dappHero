import React, { useState, useEffect, Fragment } from 'react'
import Web3GasPrice from './Web3GasPrice'

function Web3GasPriceContainer(props) {
  const { injected, domElement, keyValue } = props
  const { connected, accounts, lib } = injected

  const [gasPrice, setGasPrice] = useState(0)

  useEffect(() => {
    const getgasPrice = async () => {
      let gasPrice
      try {
        if (accounts[0]) {
          gasPrice = await lib.eth.getGasPrice()
          gasPrice = lib.utils.fromWei(gasPrice, 'ether')
          console.log('Gas price', gasPrice)
        } else {
          gasPrice = '0'
        }
      } catch (error) {
        console.log(error)
      }
      setGasPrice(gasPrice)
    }

    if (connected) {
      getgasPrice()
    }
  }, [connected])

  if (connected && accounts.length > 0) {
    return (
      <Web3GasPrice
        gasPrice={gasPrice}
        domElement={domElement}
        key={keyValue}
      ></Web3GasPrice>
    )
  } else {
    return <Fragment key={keyValue}></Fragment>
  }
}

export default Web3GasPriceContainer
