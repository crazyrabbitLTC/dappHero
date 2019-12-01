import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import uuidv1 from "uuid/v1";
import $ from "jquery";
import Web3EnableButton from "./Web3EnableButton";

function Web3EnableButtonContainer(props) {
  const { injected, domElement } = props;
  const { connected, accounts, providerName } = injected;

  if (connected && accounts.length > 0) {
    return (
      <Web3EnableButton
        providerName={providerName}
        domElement={domElement}
        key={uuidv1()}
      ></Web3EnableButton>
    );
  } else {
    return <Fragment></Fragment>;
  }
}

export default Web3EnableButtonContainer;
