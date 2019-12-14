const getModules = (modules, elements) => {
  const isValidModule = name => {
    return modules.find(element => element === name)
  }

  //Organize terms related to one component under one key
  const listOfTerms = new Map()

  //Track all the unsupported Terms found
  const listOfUnsupportedTerms = new Set()

  elements.map(element => {
    const domElementId = elements[element].id
    const requestString = domElementId.split('-')

    if (isValidModule(requestString[1])) {
      let obj = {
        element: elements[element],
        requestString,
        requestStringIndex: 1,
      }
      if (listOfTerms.has(requestString[1])) {
        listOfTerms.set(requestString[1], [
          ...listOfTerms.get(requestString[1]),
          obj,
        ])
      } else {
        listOfTerms.set(requestString[1], [obj])
      }
    } else {
      listOfUnsupportedTerms.add(requestString[1])
    }
  })

  return {
    elementsByModule: Array.from(listOfTerms),
    unsupported: Array.from(listOfUnsupportedTerms),
  }
}

export { getModules }
