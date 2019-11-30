import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function Web3NetworkName(props) {
  const { networkName, domElement } = props;

  $(domElement).empty();

  return ReactDOM.createPortal(<Fragment>{networkName}</Fragment>, domElement);
}
export default Web3NetworkName;
