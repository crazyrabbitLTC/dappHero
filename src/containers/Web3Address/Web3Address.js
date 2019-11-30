import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function Web3Address(props) {
  const { injected, domElement } = props;
  const { accounts } = injected;
console.log("What is location? ", domElement)
  return ReactDOM.createPortal(<Fragment>{accounts[0]}</Fragment>, domElement);
}
export default Web3Address;
