import React, { useState, useEffect, useCallback } from 'react'
import { useGetStaticFunction } from '../utils/generalContract'

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
  let value = useGetStaticFunction(instance, signature)

  //TODO: Worry about Multiple Return Values
  //Most likely add second Value after method- return selector
  //Find out how to format the data
  const isFormated = requestString.indexOf('format')

  let decimals = 2 //Default decimal place is 2

  if (isFormated) {
    let place = requestString.indexOf('dec')

    decimals = parseInt(requestString[place + 1])
  }

  let convertedValue

  //TODO: Understand if we need to convert from bigNumber
  //Make sure we are only formatting things that need to be formatted, get this from Arguements!

  if (
    isFormated &&
    value &&
    isFormated > 0 &&
    requestString[isFormated + 1] &&
    typeof requestString[isFormated + 1] === 'string'
  ) {
    try {
      convertedValue = lib.utils.fromWei(
        value,
        requestString[isFormated + 1],
      )
      convertedValue = parseFloat(convertedValue).toFixed(decimals)
    } catch (error) {
      console.log(
        'Error in the FunctionView Static Converting Units',
        error,
      )
    }

    thisElement.innerText = convertedValue
  } else {
    thisElement.innerText = value
  }

  //This function when called should set the element back to it's original state.
  const unmountFunction = () => {
    thisElement.innerText = originalInnerText
  }
  tearDown.push(unmountFunction)

  return null
}

export default FunctionViewStatic
