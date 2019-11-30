import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("web3-address");
//const parents = $("[id^'web3-address']")
const parents =  $('*[id*=web3-address]:visible')

console.log(parents)
function Web3Address(props) {
  const { injected } = props;
  const { connected, accounts } = injected;

  if (connected && accounts.length > 0) {
    //$(parent).empty();
    return ReactDOM.createPortal(<Fragment>{props.address}</Fragment>, parent);
  } else {
    return <Fragment></Fragment>;
  }
}
export default Web3Address;
