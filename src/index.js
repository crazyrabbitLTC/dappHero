import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import {getModules} from './utils'
import { useWeb3Injected } from '@openzeppelin/network/react'
import Web3BoxContainer from './containers/3Box/Web3Box/Web3BoxContainer'
import Web3Container from './containers/Web3/Web3Container'

function App() {
  const injected = useWeb3Injected()
  const { connected, accounts } = injected
  const elements = $('[id^="web3-"]')

  const modules = ['erc20']
  console.log("the elements: ", elements)
  const {listOfTerms, unsupported} = getModules(modules, elements);


  const reducer = request => {
    switch (request.arg) {
      // case 'erc20':
      //   if (connected && accounts.length > 0) {
      //     return (
      //       <Web3ERC20Container
      //         injected={injected}
      //         key={request.index}
      //         domElement={request.el}
      //         request={request}
      //         index={request.index}
      //       ></Web3ERC20Container>
      //     )
      //   }
      //   break
      case 'box':
        if (connected && accounts.length > 0) {
          return (
            <Web3BoxContainer
              injected={injected}
              key={request.index}
              domElement={request.el}
              request={request}
              index={request.index}
            ></Web3BoxContainer>
          )
        }
        break
      case 'web3':
        if (connected ) {
          return (
            <Web3Container
              injected={injected}
              key={request.index}
              elements={request.elements}
              request={request}
            ></Web3Container>
          )
        }
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

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById('react-target'),
)

