function formatReturnValue(value, requestString, lib) {
  let convertedValue
  let decimals = 2

  const isFormated = requestString.indexOf('format')
  let decimalCount = requestString.indexOf('dec')

  //web3-erc2-[method]-format-dec-2  <-sample example
  if (
    isFormated &&
    isFormated > 0 &&
    decimalCount &&
    decimalCount === isFormated + 1
  ) {
    decimals = Number(requestString[decimalCount + 1])
  }

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

    return convertedValue
  } else {
    return value
  }
}

export {formatReturnValue as default}