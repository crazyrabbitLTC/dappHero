import React, { useState, useEffect, Fragment } from 'react'
import Web3ERC20SendButton from './SendButton'

function SendButtonContainer(props) {
  const { injected, domElement, key, handleSubmit } = props
  const { connected, accounts, providerName } = injected
  if (connected && accounts.length > 0) {
    return (
      <Web3ERC20SendButton
        providerName={providerName}
        handleSubmit={handleSubmit}
        domElement={domElement}
        key={key}
      ></Web3ERC20SendButton>
    )
  } else {
    return <Fragment key={key}></Fragment>
  }
}

export default SendButtonContainer
