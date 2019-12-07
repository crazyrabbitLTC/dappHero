import React, { Fragment } from 'react'
import uuidv1 from 'uuid/v1'
import Web3Address from './Web3Address'

function Web3AddressContainer(props) {
  const { injected, domElement } = props
  const { connected, accounts } = injected

  if (connected && accounts.length > 0) {
    return (
      <Web3Address
        injected={injected}
        domElement={domElement}
        key={uuidv1()}
      ></Web3Address>
    )
  } else {
    return <Fragment></Fragment>
  }
}

export default Web3AddressContainer
