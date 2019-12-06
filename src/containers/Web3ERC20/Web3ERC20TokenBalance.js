import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

class Web3ERC20TokenBalance extends React.Component {
  constructor(props) {
    super(props)

    while (this.props.domElement.firstChild) {
      this.props.domElement.removeChild(
        this.props.domElement.firstChild,
      )
    }
  }

  render() {
    console.log("props", this.props)
    return ReactDOM.createPortal(
      <Fragment>{this.props.injected.lib.utils.fromWei((this.props.balance).toString(), 'ether')}</Fragment>,
      document.getElementById(this.props.domElement.id),
    )
  }
}

export default Web3ERC20TokenBalance
