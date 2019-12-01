import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import uuidv1 from  'uuid/v1';
import $ from "jquery";
import Web3Address from "./Web3Address";

function Web3AddressContainer(props) {
  const { injected, domElement } = props;
  const { connected, accounts } = injected;

  if (
    connected &&
    accounts.length > 0
  ) {
    return (
      <Fragment>
      <Web3Address
      injected={injected}
      domElement={domElement}
      key={uuidv1()}
    ></Web3Address>
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
  return <div>IN address container</div>
}

export default Web3AddressContainer;
