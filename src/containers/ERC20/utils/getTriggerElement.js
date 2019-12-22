const getTriggerElement = (modules, request, position) => {
  let triggerElement = modules.filter(module => {
    return (
      module.requestString[position] === request &&
      module.requestString.length === position + 1
    )
  })
  triggerElement = triggerElement[0].element
  triggerElement = document.getElementById(triggerElement.id)
  return triggerElement
}

export {getTriggerElement as default}