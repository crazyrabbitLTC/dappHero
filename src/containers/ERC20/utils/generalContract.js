

const getEvents = abi => {
  const events = abi.filter(method => {
    return method.type === "event";
  });
  return events;
};

const getViewFunctions = abi => {
  const viewFunctions = abi.filter(method => {
    return method.constant;
  });
  return viewFunctions;
};

const getFunctions = abi => {
  const functions = abi.filter(method => {
    return !method.constant;
  });
  return functions;
};

const getFuncRequirements = (listOfFunctions, web3) =>
  listOfFunctions.map(func => {
    return {
      signature: web3.eth.abi.encodeFunctionSignature(func),
      name: func.name,
      arguments: JSON.stringify(
        func.inputs.map(input => {
          return {
            name: input.name,
            type: input.type
          };
        })
      ),
      outputs: JSON.stringify(func.outputs)
    };
  });
  const getMethods = (obj) => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function')

export {
  getEvents,
  getViewFunctions,
  getFunctions,
  getFuncRequirements,
  getMethods
};
