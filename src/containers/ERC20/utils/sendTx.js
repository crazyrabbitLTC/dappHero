function sendTx(instance, signature, args, accounts) {
  const contractCall = async (
    instance,
    signature,
    args,
    callback,
  ) => {
    let value
    try {
      value = await instance.methods[signature](...args).send({from: accounts[0]})
    } catch (error) {
      console.log('In Call Instance Error: ', error)
    }
    console.log("TX Value: ", value)
  }
  contractCall(instance, signature, args)
}

export { sendTx as default }
