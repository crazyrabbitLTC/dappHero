import { useState, useEffect } from 'react'

const getMethods = obj =>
  Object.getOwnPropertyNames(obj).filter(
    item => typeof obj[item] === 'function',
  )

function getFuncRequirements(listOfFunctions, web3) {
  const reqs = listOfFunctions.map(func => {
    return {
      signature: web3.eth.abi.encodeFunctionSignature(func),
      name: func.name,
      arguments: func.inputs.map(input => {
        return {
          name: input.name,
          type: input.type,
        }
      }),
      outputs: func.outputs,
    }
  })
  return reqs
}

function useContractInstance(abi, address, web3) {
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    function createInstance(abi, address, web3) {
      const instance = new web3.eth.Contract(abi, address)
      setInstance(instance)
    }
    createInstance(abi, address, web3)
  }, [])
  return instance
}

function useViewFunctions(abi) {
  const [viewFunctions, setViewFunctions] = useState(null)

  useEffect(() => {
    function getViewFunctions(abi) {
      const viewFunctions = abi.filter(method => {
        return method.constant
      })
      setViewFunctions(viewFunctions)
    }
    getViewFunctions(abi)
  }, [])

  return viewFunctions
}

function useGetMethods(abi, web3) {
  const [functions, setFunctions] = useState(null)

  useEffect(() => {
    function getFunctions(abi) {
      const functions = abi.map(method => {
        return {
          ...method,
          signature: web3.eth.abi.encodeFunctionSignature(method),
          arguments: method.inputs.map(input => {
            return {
              name: input.name,
              type: input.type,
            }
          }),
        }
      })
      setFunctions(functions)
    }
    getFunctions(abi)
  }, [])
  return functions
}

function useEvents(abi) {
  const [events, setEvents] = useState(null)

  useEffect(() => {
    const getEvents = abi => {
      const events = abi.filter(method => {
        return method.type === 'event'
      })
      setEvents(events)
    }
    getEvents(abi)
  }, [])

  return events
}





export {
  getFuncRequirements,
  getMethods,
  useContractInstance,
  useViewFunctions,
  useGetMethods,
  useEvents,
}
