import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { EthAddress } from "rimble-ui";

function Web3Address(props) {
  const { injected, domElement } = props;
  const { accounts } = injected;
  $(domElement).empty();
  //return ReactDOM.createPortal(<Fragment>{(accounts[0])}......</Fragment>, domElement);
  return ReactDOM.createPortal(<EthAddress address={accounts[0]} />, domElement);
}
export default Web3Address;
