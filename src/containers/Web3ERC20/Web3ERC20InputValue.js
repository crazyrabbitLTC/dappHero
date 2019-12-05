import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

class Web3ERC20InputValue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: ""
    }
    this.handleInput = this.handleInput.bind(this)
    this.handlePast = this.handlePaste.bind(this)
    // while (this.props.domElement.firstChild) {
    //   this.props.domElement.removeChild(
    //     this.props.domElement.firstChild,
    //   )
    // }
  }

  componentDidMount(){

    this.inputElement = document.getElementById(
      this.props.domElement.id,
    )
    this.inputElement.addEventListener("input", this.handleInput)
    this.inputElement.addEventListener("paste", this.handlePaste)
  }

  handleInput(e) {
    if(e.data)console.log("The Input! ", e.data)
  }

  handlePaste(event){
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    console.log("thePastw", paste);
  }
    
    
    render() {

      // this.parent = this.inputElement.parentElement;
      // console.log("The parent: ", this.parent)
  
      // console.log("Is input element a valid react element? ", React.isValidElement(this.inputElement))
      // console.log("Is parent element a valid react element? ", React.isValidElement(this.parent))
      // console.log("PArent element id: ", this.parent.id)
  
      // this.test = React.cloneElement(this.inputElement, {onClick: (e) => this.handleInput(e)})
      // console.log("Is The test a valid element", React.isValidElement(this.test) )

    // return ReactDOM.render(
    //   this.test,
    //   document.getElementById(this.parent.id)
    // )

    
      return null
    }
  
}

export default Web3ERC20InputValue
