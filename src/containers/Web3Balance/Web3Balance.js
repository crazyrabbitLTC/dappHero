import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

class Web3Balance extends React.Component {
  constructor(props) {
    super(props)
    while (this.props.domElement.firstChild) {
      this.props.domElement.removeChild(
        this.props.domElement.firstChild,
      )
    }
  }

  render() {
    console.log(this.props.balance)
    return ReactDOM.createPortal(
      <Fragment>{Number(this.props.balance).toFixed(3)}</Fragment>,
      document.getElementById(this.props.domElement.id),
    )
  }
}

export default Web3Balance
