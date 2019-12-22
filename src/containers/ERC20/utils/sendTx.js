function sendTx(instance, signature, args, accounts, callback) {

  //TODO: Keep track of transactions for website owners data

  const defaultCallback = {
    transactionHash: null,
    confirmation: null,
    receipt: null,
    error: (x,y) => console.log("The error is ", x, " and receipt is: ", y)
  }

  const sendTransaction = async (
    instance,
    signature,
    args,
    callback = defaultCallback,
  ) => {



    
    instance.methods[signature](...args).send({from: accounts[0]})
    .on('transactionHash', function(hash){
      console.log(`TransactionHash: ${hash}`)
      if(callback['transactionHash']){callback['transactionHash'](hash)}
    })
    .on('confirmation', function(confirmationNumber, receipt){
      if(callback['confirmation']){callback['confirmation'](confirmationNumber, receipt)}
      console.log(`Confirmation Number: ${confirmationNumber} and Receipt: ${receipt}`)
    })
    .on('receipt', function(receipt){
      if(callback['receipt']){callback['receipt'](receipt)}
      console.log(`The receipt: ${receipt}`)
    })
    .on('error', function(error, receipt){
      if(callback['error']){callback['error'](error, receipt)}
      //console.log(`There was an error in sending the transaction: ${error} with receipt ${receipt}`)
    })
  }



  sendTransaction(instance, signature, args, callback)
}

export { sendTx as default }
