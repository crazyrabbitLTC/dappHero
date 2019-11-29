import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("web3-providerName");
$(parent).empty();

function Web3ProviderName(props) {
  return ReactDOM.createPortal(<Fragment>{props.providerName}</Fragment>, parent);
}
export default Web3ProviderName;
