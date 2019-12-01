import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import uuidv1 from "uuid/v1";
import $ from "jquery";
import Web3NetworkName from "./Web3NetworkName";

function Web3NetworkNameContainer(props) {
  const { injected, domElement, keyValue } = props;
  const { connected, accounts, networkName } = injected;
  if (connected && accounts.length > 0) {
    return (
      <Web3NetworkName
        networkName={networkName}
        domElement={domElement}
        key={keyValue}
      ></Web3NetworkName>
    );
  } else {
    return <Fragment key={keyValue}></Fragment>;
  }
}

export default Web3NetworkNameContainer;
