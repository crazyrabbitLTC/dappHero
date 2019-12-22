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


export {callInstance as default}