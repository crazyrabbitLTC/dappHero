import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { useWeb3Injected } from '@openzeppelin/network/react'
import Web3AddressContainer from './Web3Address/Web3AddressContainer'
import Web3BalanceContainer from './Web3Balance/Web3BalanceContainer'
import Web3NetworkIdContainer from './Web3NetworkId/Web3NetworkIdContainer'
import Web3ProviderNameContainer from './Web3ProviderName/Web3ProviderNameContainer'
import Web3NetworkNameContainer from './Web3NetworkName/Web3NetworkNameContainer'
import Web3EnableButton from './Web3EnableButton/Web3EnableButton'
import Web3GasPriceContainer from './Web3GasPrice/Web3GasPriceContainer'

function Web3Container(props) {
  const { injected, elements, request } = props
  const { connected, accounts } = injected
  // const injected = useWeb3Injected()
  // const { connected, accounts } = injected
  // const elements = $('[id^="web3-"]')

  const reducer = request => {
    switch (request.arg) {
      case 'address':
        return (
          <Web3AddressContainer
            key={request.index}
            injected={injected}
            domElement={request.el}
          ></Web3AddressContainer>
        )
        break

      case 'networkId':
        return (
          <Web3NetworkIdContainer
            key={request.index}
            injected={injected}
            domElement={request.el}
          ></Web3NetworkIdContainer>
        )
        break

      case 'providerName':
        return (
          <Web3ProviderNameContainer
            key={request.index}
            injected={injected}
            domElement={request.el}
          ></Web3ProviderNameContainer>
        )
        break

      case 'networkName':
        return (
          <Web3NetworkNameContainer
            key={request.index}
            keyValue={request.index}
            injected={injected}
            domElement={request.el}
          ></Web3NetworkNameContainer>
        )
        break

      case 'enableButton':
        return (
          <Web3EnableButton
            key={request.index} //Needed to prevent React Key issue
            injected={injected}
            domElement={request.el}
          ></Web3EnableButton>
        )
        break

      case 'balance':
        return (
          <Web3BalanceContainer
            key={request.index}
            injected={injected}
            domElement={request.el}
          ></Web3BalanceContainer>
        )
        break

      case 'gasPrice':
        return (
          <Web3GasPriceContainer
            key={request.index}
            keyValue={request.index}
            injected={injected}
            domElement={request.el}
          ></Web3GasPriceContainer>
        )
        break

      default:
        return null
    }
  }

  return (
    <Fragment>
      {elements.map(element => {
        const domElementId = elements[element].id
        const requestString = domElementId.split('-')
        return reducer({
          arg: requestString[1],
          el: elements[element],
          index: element,
          requestString,
        })
      })}
    </Fragment>
  )
}

export default Web3Container

// const modules = ['erc20']

// //Loop through all the found tagged elements.
// //If they match our list of supported modules
// //Create a map entry of all the functions requested on that module
// //Then send that map value down to the module so that it can process it.

// const getModules = (supportedModules, foundElements) => {
//   const isValidModule = name => {
//     return modules.find(element => element === name)
//   }

//   //Organize terms related to one component under one key
//   const listOfTerms = new Map()

//   //Track all the unsupported Terms found
//   const listOfUnsupportedTerms = new Set()

//   elements.map(element => {
//     const domElementId = elements[element].id
//     const requestString = domElementId.split('-')

//     if (isValidModule(requestString[1])) {
//       let obj = {
//         element: elements[element],
//         requestString,
//         requestStringIndex: 1,
//       }
//       if (listOfTerms.has(requestString[1])) {
//         listOfTerms.set(requestString[1], [
//           ...listOfTerms.get(requestString[1]),
//           obj,
//         ])
//       } else {
//         listOfTerms.set(requestString[1], [obj])
//       }
//     } else {
//       listOfUnsupportedTerms.add(requestString[1])
//     }
//   })

//   return ({listOfTerms: Object.fromEntries(listOfTerms), unsupported: Array.from(listOfUnsupportedTerms)});
// }

// const {listOfTerms, unsupported} = getModules(modules, elements);
