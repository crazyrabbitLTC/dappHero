import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function Web3NetworkId(props) {
  const { networkId, domElement } = props;

  $(domElement).text((networkId))
  return null;

  // $(domElement).empty();
  // return ReactDOM.createPortal(<Fragment>{networkId}</Fragment>, domElement);
}
export default Web3NetworkId;
