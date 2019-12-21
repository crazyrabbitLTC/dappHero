import React, { useState, useEffect, useCallback } from 'react'
import { callInstance } from '../utils/generalContract'

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

  //We need to sort based on

  const indexOfRequest = requestString.indexOf(request)

  //We need to support multiple arguments.
  //We need to check that all required arguments as listed on method are satisfied.
  //We need to check if the argument is coming from somewhere else.

  const position = requestString.indexOf(request)
  let argument = requestString[position + 1]

  if (argument === 'user') {
    argument = [accounts[0]]
  }

  //This function is a Hook which updates this local state. 
  callInstance(instance, signature, argument, setValue)

  //The input values must directly follow the request if they are required.

  //console.log(indexOfRequest)
  //TODO: Worry about Multiple Return Values
  //Most likely add second Value after method- return selector
  //Find out how to format the data
  const isFormated = requestString.indexOf('format')
  let decimals = 2 //Default decimal place is 2

  if (isFormated) {
    let place = requestString.indexOf('dec')
    decimals = Number(requestString[place + 1])
  }

  let convertedValue

  //console.log('The request, ', request)
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
        'Error in the FunctionView ARgs Converting Units',
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

export default FunctionViewArgs
