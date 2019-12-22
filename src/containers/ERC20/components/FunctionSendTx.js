import React, { useState, useEffect, useCallback } from 'react'
import sendTx from '../utils/sendTx'
import getTxFieldInputs from '../utils/getTxFieldInputs'
import getTriggerElement from '../utils/getTriggerElement'

function FunctionSendTx(props) {
  const {
    element,
    method,
    instance,
    injected,
    requestString,
    request,
    modules,
  } = props
  const { accounts, lib } = injected
  const { signature } = method
  const position = requestString.indexOf(request)

  const defaultState = {
    transactionHash: null,
    confirmations: null,
    receipt: null,
    error: null,
  }

  const [tx, setTx] = useState(defaultState)
  console.log('The TX is:  ', tx)
  
  const onClick = () => {
    const { inputFields, txArgArray } = getTxFieldInputs(
      modules,
      position,
      request,
      method,
    )

    sendTx(instance, signature, txArgArray, accounts, setTx, tx)

    inputFields.map(module => {
      document.getElementById(module.element.id).value = null
    })
  }

  let triggerElement = getTriggerElement(modules, request, position)
  triggerElement.addEventListener('click', onClick)

  return null
}

export default FunctionSendTx
