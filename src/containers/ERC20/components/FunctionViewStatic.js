import React, { useState, useEffect, useCallback } from 'react'
import {useGetStaticFunction} from '../utils/generalContract'

function FunctionViewStatic(props) {
  console.log("The props: ", props)
  const { element, method, instance, injected, tearDown } = props
  const { accounts, lib } = injected
  const { signature } = method
  
  const thisElement = document.getElementById(element.id)

  const originalInnerText = thisElement.innerText
  const value = useGetStaticFunction(instance, signature)

  const unmountFunction = () => {
    thisElement.innerText = originalInnerText;
  }

tearDown.push(unmountFunction);

  thisElement.innerText = value;
  // return ReactDOM.createPortal(
  //   <Fragment>{this.props.name}</Fragment>,
  //   document.getElementById(this.props.domElement.id),
  // )
  return null;
}

export default FunctionViewStatic
