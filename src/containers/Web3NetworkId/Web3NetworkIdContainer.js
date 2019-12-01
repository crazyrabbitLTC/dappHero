import React, { useState, useEffect, Fragment } from 'react'

import uuidv1 from 'uuid/v1'

import Web3NetworkId from './Web3NetworkId'

function Web3NetworkIdContainer(props) {
  const { injected, domElement } = props
  const { connected, accounts, networkId } = injected

  if (connected && accounts.length > 0) {
    return (
      <Web3NetworkId
        networkId={networkId}
        domElement={domElement}
        key={uuidv1()}
      ></Web3NetworkId>
    )
  } else {
    return <Fragment></Fragment>
  }
}

export default Web3NetworkIdContainer
