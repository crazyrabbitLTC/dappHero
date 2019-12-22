function sendTx(
  instance,
  signature,
  args,
  accounts,
  setTxState,
  txState,
) {

  //TODO: Keep track of transactions for website owners analytics
  instance.methods[signature](...args)
    .send({ from: accounts[0] })
    .on('transactionHash', function(hash) {
      setTxState(txState => {
        return { ...txState, transactionHash: hash }
      })
    })
    .on('confirmation', function(confirmationNumber, receipt) {
      setTxState(txState => {
        return {
          ...txState,
          confirmations: confirmationNumber,
          receipt,
        }
      })
    })
    .on('receipt', function(receipt) {
      setTxState(txState => {
        return {
          ...txState,
          receipt,
        }
      })
    })
    .on('error', function(error, receipt) {
      setTxState(txState => {
        return {
          ...txState,
          error,
          receipt,
        }
      })
    })
}

export { sendTx as default }
