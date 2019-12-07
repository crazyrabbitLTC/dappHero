import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

class Web3NetworkName extends React.Component {
  constructor(props) {
    super(props)

    while (this.props.domElement.firstChild) {
      this.props.domElement.removeChild(
        this.props.domElement.firstChild,
      )
    }
  }

  render() {
    return ReactDOM.createPortal(
      <Fragment>{this.props.networkName}</Fragment>,
      document.getElementById(this.props.domElement.id),
    )
  }
}

export default Web3NetworkName
