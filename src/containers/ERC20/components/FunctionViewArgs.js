import React, { useState, useEffect, useCallback } from 'react'
import callInstance from '../utils/callInstance'
import formatReturnValue from '../utils/formatReturnValue'

//TODO: HANDLE RETURN OF MULTIPLE VALUES
function FunctionViewArgs(props) {
  const {
    element,
    method,
    instance,
    injected,
    tearDown,
    requestString,
    request,
    modules,
  } = props
  const { accounts, lib } = injected
  const { signature } = method
  const thisElement = document.getElementById(element.id)
  const originalInnerText = thisElement.innerText
  const [value, setValue] = useState(null)

  const unMountFunction = () => {
    thisElement.innerText = originalInnerText
  }

  tearDown.push(unMountFunction)

  const position = requestString.indexOf(request)

  //TODO: Account for Errors
  let argument = requestString[position + 1]
  if (argument === 'user') {
    argument = [accounts[0]]
  }

  callInstance(instance, signature, argument, setValue)

  thisElement.innerText = formatReturnValue(value, requestString, lib)

  return null
}

export default FunctionViewArgs
