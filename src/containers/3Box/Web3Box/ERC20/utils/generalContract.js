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

//This should perhaps return an object rather than a value
//Include any potential errors and give info if it worked or failed.
function useGetStaticFunction(instance, signature) {
  const [value, setValue] = useState(null)

  useEffect(() => {
    async function getValue() {
      let value
      try {
        value = await instance.methods[signature]().call()
      } catch (error) {
        console.log('The Function View STatic error: ', error)
      }
      setValue(value)
    }
    getValue()
  }, [])

  return value
}

function callInstance(instance, signature, args, callback) {
  const contractCall = async (
    instance,
    signature,
    args,
    callback,
  ) => {
    let value
    try {
      value = await instance.methods[signature](...args).call()
    } catch (error) {
      console.log('In Call Instance Error: ', error)
    }
    callback(value)
  }
  contractCall(instance, signature, args, callback)
}

//There needs to be a source of default settings, perhaps set on contract?
//If we use event emitter structure then we can pass in more options
function sendTransaction(
  instance,
  signature,
  args,
  value = 0,
  sender,
  callback,
) {
  console.log(`The arguments: ${args} and the value: ${value}`)

  //In the future we might estimate gas from an API
  const sendTx = async (
    instance,
    signature,
    args,
    value,
    callback,
    lib,
  ) => {
    let tx = null
    let gasPrice = null
    let gas = null
    let lastBlock = null
    let gasLimit = null

    lastBlock = await lib.eth.getBlock('latest')
    gasLimit = lastBock.gasLimit

    gas = await instance.methods[signature](...args).estimateGas({
      from: sender,
    })
    gas = Math.min(gasLimit - 1, Math.ceil(gas * 1.2))
    gasPrice = await lib.eth.getGasPrice()

    try {
      tx = await instance.methods[signature](...args).send({
        from: sender,
        gas,
        gasPrice,
        value,
      })
    } catch (error) {
      console.log(
        'Error in send transaction Contract function: ',
        error,
      )
    }
    callback(tx)
  }
}

export {
  getFuncRequirements,
  getMethods,
  useContractInstance,
  useGetStaticFunction,
  useViewFunctions,
  useGetMethods,
  useEvents,
  callInstance,
  sendTransaction,
}
