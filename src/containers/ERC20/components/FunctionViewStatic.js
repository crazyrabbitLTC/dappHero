import React, { useState, useEffect, useCallback } from 'react'
import useGetStaticFunc from '../utils/useGetStaticFunc'
import formatReturnValue from '../utils/formatReturnValue'

//TODO: Support multiple Return Values
function FunctionViewStatic(props) {
  const {
    element,
    method,
    instance,
    injected,
    tearDown,
    requestString,
    request,
  } = props
  const { accounts, lib } = injected
  const { signature } = method
  const thisElement = document.getElementById(element.id)
  const originalInnerText = thisElement.innerText

  //Function called on unMount. (Need to check it works)
  const unmountFunction = () => {
    thisElement.innerText = originalInnerText
  }
  tearDown.push(unmountFunction)

  const value = useGetStaticFunc(instance, signature)

  thisElement.innerText = formatReturnValue(value, requestString, lib)

  return null
}

export default FunctionViewStatic
