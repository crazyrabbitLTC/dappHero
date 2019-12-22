import React, { useState, useEffect, useCallback } from 'react'
import sendTx from '../utils/sendTx'
import getTriggerElement from '../utils/getTriggerElement'

//TODO: HANDLE RETURN OF MULTIPLE VALUES
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

  console.log('This The method: ', method)

  const onClick = () => {
    let newObj = {}
    let inputArgArray = []

    let inputs = modules.filter(module => {
      return (
        module.requestString[position] === request &&
        module.requestString.length === position + 2
      )
    })

    inputs.map(module => {
      // console.log(
      //   'The module request string: ',
      //   module.requestString[position + 1],
      // )
      newObj[
        module.requestString[position + 1]
      ] = document.getElementById(module.element.id).value
    })

    method.inputs.map(method => {
      inputArgArray.push(newObj[method.name])
    })

    console.log('Input Arg Array: ', inputArgArray)

    sendTx(instance, signature, inputArgArray, accounts)

    inputs.map(module => {
      document.getElementById(module.element.id).value = null
    })
  }

  let triggerElement = getTriggerElement(modules, request, position)
  triggerElement.addEventListener('click', onClick)

  //This Element must first find all the data for each argument.

  //Filter for all the elements/modules which match this request.

  return null
}

export default FunctionSendTx
