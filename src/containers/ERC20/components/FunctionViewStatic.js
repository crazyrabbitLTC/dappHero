import React, { useState, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'

function FunctionViewStatic(props) {
  //console.log("The props: ", props)
  const { element, method, instance, injected } = props
  const { accounts, lib } = injected
  const { signature } = method

  function useGetStaticFunction() {
    const [value, setValue] = useState(null)

    useEffect(() => {
      async function getValue() {
        let value
        try {
          value = await instance.methods[signature]().call()
          console.log('The return value', value)
        } catch (error) {
          console.log('The Function View STatic error: ', error)
        }
        setValue(value)
      }
      getValue()
    }, [])

    return value
  }

  const value = useGetStaticFunction();

  // return ReactDOM.createPortal(
  //   <Fragment>{this.props.name}</Fragment>,
  //   document.getElementById(this.props.domElement.id),
  // )
  return <div>Hello doy bitches!</div>
}

export default FunctionViewStatic
