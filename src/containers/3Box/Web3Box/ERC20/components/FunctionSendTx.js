import React, { useState, useEffect, useCallback } from 'react'
import { callInstance } from '../utils/generalContract'
import _ from 'lodash'

function FunctionSendTx(props) {
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

  const reqPosition = requestString.indexOf(request)
  const theseMethods = modules.filter(module => {
    return module.requestString[reqPosition] === request
  })

  //The trigger is the element with no arguments
  const funcTrigger = theseMethods.find(module => {
    return module.requestString.length === reqPosition + 1
  })

  const funcArgs = theseMethods.filter(module => {
    return module.requestString.length != reqPosition + 1
  })

  let args = []

  //We need a type check function for Solidity contracts
  _.forEach(method.arguments, function(value) {
    console.log('Incoming Value: ', value)
    let method = funcArgs.find(el => {
      console.log('What is el? ', el)
      return el.requestString[reqPosition] === value.name
    })
    console.log('The Found method: ', method)
  })

  return null
}

export default FunctionSendTx
