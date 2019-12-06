import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

class Web3ERC20InputAddress extends React.Component {
  constructor(props) {
    super(props)
    this.bubbleInput = this.props.handleFormEntry.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    this.inputElement = document.getElementById(
      this.props.domElement.id,
    )
    this.data = document.querySelector(
      'input.web3-erc20-inputAddress',
    )
    this.inputElement.addEventListener('input', this.handleInput)
  }

  handleInput(e) {
    //add some sort of validation here in the future
    this.bubbleInput(this.data.value)
  }

  render() {
    return null
  }
}

export default Web3ERC20InputAddress
