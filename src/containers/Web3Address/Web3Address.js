import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function Web3Address(props) {
  const { injected, domElement } = props;
  const { accounts } = injected;


  $(domElement).text((accounts[0]))
  return null;
  
  // $(domElement).empty();
  // return ReactDOM.createPortal(<Fragment>{(accounts[0])}</Fragment>, domElement);
}
export default Web3Address;
