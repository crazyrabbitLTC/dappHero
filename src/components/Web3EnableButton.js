import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("web3-enableButton");
$(parent).empty();

function Web3EnableButton(props) {

  const {injected} = props;
 const {connected, accounts} = injected;

  const web3Enable = async () => {
    await injected.requestAuth();
  }

  if(connected && accounts.length > 0){
    return ReactDOM.createPortal(<a >Web3 Connected</a>, parent);
  } else {
    return ReactDOM.createPortal(<a onClick={() => {web3Enable()}}>enable MetaMask</a>, parent);
  }

}
export default Web3EnableButton;
