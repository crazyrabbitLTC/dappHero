import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { getModules } from './utils'
import { useWeb3Injected } from '@openzeppelin/network/react'
import Web3BoxContainer from './containers/3Box/Web3Box/Web3BoxContainer'
import Web3ERC20Container from './containers/ERC20/Web3ERC20Container'
import Web3Container from './containers/Web3/Web3Container'

function App() {
  const injected = useWeb3Injected()
  const { connected, accounts } = injected
  const elements = $('[id^="web3-"]')

  const modules = ['erc20']

  const { elementsByModule, unsupported } = getModules(modules, elements)

  const reducer = module => {
     switch (module.moduleName) {
      case 'erc20':
        if (connected && accounts.length > 0) {
          return (
            <Web3ERC20Container
              injected={injected}
              key={module.key}
              modules={module.subModules}
            ></Web3ERC20Container>
          )
        }
        break
      case 'box':
        if (connected && accounts.length > 0) {
          return (
            <Web3BoxContainer
              injected={injected}
              key={module.key}
              domElement={module.el}
              module={module}
              index={module.index}
            ></Web3BoxContainer>
          )
        }
        break
      case 'web3':
        if (connected) {
          return (
            <Web3Container
              injected={injected}
              key={module.key}
              elements={module.elements}
              module={module}
            ></Web3Container>
          )
        }
        break
      default:
        return null
    }
  }

  return(
    <Fragment>
    {
      elementsByModule.map((element, index) => {
        const moduleName = element[0];
        const subModules = element[1];
        const key = `${moduleName}-${index}`
        return reducer({
          moduleName,
          subModules,
          key
        })
      })
    }
    </Fragment>
  )

}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById('react-target'),
)