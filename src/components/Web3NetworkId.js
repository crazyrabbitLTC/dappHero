import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("web3-networkId");
$(parent).empty();

function Web3NetworkId(props) {
  return ReactDOM.createPortal(<Fragment>{props.networkId}</Fragment>, parent);
}
export default Web3NetworkId;
