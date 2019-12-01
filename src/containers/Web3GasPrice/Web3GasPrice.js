import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";

class Web3GasPrice extends React.Component {
  constructor(props) {
    super(props);
    const myNode = props.domElement;
    while (this.props.domElement.firstChild) {
      this.props.domElement.removeChild(this.props.domElement.firstChild);
    }
  }

  render() {
    return ReactDOM.createPortal(
      <Fragment>{this.props.gasPrice}</Fragment>,
      document.getElementById(this.props.domElement.id)
    );
  }
}

export default Web3GasPrice;
