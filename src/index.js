import React, {Fragment } from 'react'
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
import Web3ERC20Container from './containers/ERC20/ERC20Container'


function App() {
  const injected = useWeb3Injected()
  const { connected, accounts } = injected
  const elements = $('[id^="web3-"]')

  const reducer = request => {
    switch (request.arg) {
      case 'erc20':
        if (connected && accounts.length > 0) {
          return (
            <Web3ERC20Container
              injected={injected}
              key={request.index}
              domElement={request.el}
              request={request}
              index={request.index}
            ></Web3ERC20Container>
          )
        }
        break
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

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById('react-target'),
)
