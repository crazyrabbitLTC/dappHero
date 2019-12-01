import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function Web3EnableButton(props) {
  const { injected, domElement } = props;
  const { connected, accounts } = injected;

  $(domElement).empty();

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
        enable MetaMask
      </a>,
      domElement
    );
  }
}
export default Web3EnableButton;
