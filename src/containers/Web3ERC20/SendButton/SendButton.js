import React, { useRef, useEffect, Fragment } from 'react'
import ReactDOM from 'react-dom'

class SendButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.props.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.inputElement = document.getElementById(
      this.props.domElement.id,
    )
      this.inputElement.addEventListener('click', this.handleSubmit)
       console.log(this.inputElement)
  }

  render() {
    return null
  }
}

export default SendButton

