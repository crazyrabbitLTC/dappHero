import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("web3-networkName");
$(parent).empty();

function Web3NetworkName(props) {
  return ReactDOM.createPortal(<Fragment>{props.networkName}</Fragment>, parent);
}
export default Web3NetworkName;
