import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function Web3EnableButton(props) {
  const { injected, domElement } = props;
  const { connected, accounts } = injected;

  //$(domElement).empty();
  //Need to better understand how to target inside of the button

  const web3Enable = async () => {
    await injected.requestAuth();
  };

  if (connected && accounts.length > 0) {
    return ReactDOM.createPortal(<a>Web3 Connected</a>, domElement);
  } else {
    return ReactDOM.createPortal(
      <a
        onClick={() => {
          web3Enable();
        }}
      >
        Enable Metamask
      </a>,
      domElement
    );
  }
}
export default Web3EnableButton;
