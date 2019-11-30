import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function Web3Address(props) {
  const { injected, domElement } = props;
  const { accounts } = injected;
  $(domElement).empty();
  return ReactDOM.createPortal(<Fragment>{(accounts[0]).substr(0,8)}......</Fragment>, domElement);
}
export default Web3Address;
