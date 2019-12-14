import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { useWeb3Injected } from '@openzeppelin/network/react'
import Web3AddressContainer from './containers/Web3/Web3Address/Web3AddressContainer'
import Web3BalanceContainer from './containers/Web3/Web3Balance/Web3BalanceContainer'
import Web3NetworkIdContainer from './containers/Web3/Web3NetworkId/Web3NetworkIdContainer'
import Web3ProviderNameContainer from './containers/Web3/Web3ProviderName/Web3ProviderNameContainer'
import Web3NetworkNameContainer from './containers/Web3/Web3NetworkName/Web3NetworkNameContainer'
import Web3EnableButton from './containers/Web3/Web3EnableButton/Web3EnableButton'
import Web3BoxContainer from './containers/3Box/Web3Box/Web3BoxContainer'
import Web3GasPriceContainer from './containers/Web3/Web3GasPrice/Web3GasPriceContainer'
import Web3ERC20Container from './containers/ERC20/Web3ERC20Container'
import { request } from 'http'

function App() {
  const injected = useWeb3Injected()
  const { connected, accounts } = injected
  const elements = $('[id^="web3-"]')

  const erc20 = []

  const listOfTerms = new Map()

  const modules = ['erc20']

  const isValidModule = name => {
    return modules.find(element => element === name)
  }

  //Loop through all the found tagged elements.
  //If they match our list of supported modules
  //Create a map entry of all the functions requested on that module
  //Then send that map value down to the module so that it can process it.
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
      //This should log some sort of error or we should keep track of the non-found elements
      //console.log(`Module: ${requestString[1]} is not supported`)
    }
  })

  //Reducer that will return each container module that was found
  const reducer = request => {
    switch (request.key) {
      case 'erc20':
        return (
          <Web3ERC20Container
            injected={injected}
            request={request}
          ></Web3ERC20Container>
        )
        break
      default:
        return null
    }
  }

  //For all the valid terms found, send them to the reducer to render.
  return (
    <div>
      {listOfTerms.forEach((value, key, map) => {
        console.log(key, value)
        return <div>Hello</div>
      })}
    </div>
  )
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById('react-target'),
)
