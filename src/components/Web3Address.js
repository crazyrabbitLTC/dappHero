import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("web3-address");
$(parent).empty();

function Web3Address(props) {
  return ReactDOM.createPortal(<Fragment>{props.address}</Fragment>, parent);
}
export default Web3Address;
