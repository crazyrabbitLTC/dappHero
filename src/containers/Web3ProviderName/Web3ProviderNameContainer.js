import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import uuidv1 from "uuid/v1";
import $ from "jquery";
import Web3providerName from "./Web3ProviderName";

function Web3providerNameContainer(props) {
  const { injected } = props;
  const { connected, accounts, providerName } = injected;
  const providerNameLocations = $("*[id*=web3-providerName]:visible");

  if (
    providerNameLocations &&
    providerNameLocations.length > 0 &&
    connected &&
    accounts.length > 0
  ) {
    return (
      <Fragment>
        {providerNameLocations.map((e, index) => (
          <Web3providerName
            providerName={providerName}
            domElement={providerNameLocations[e]}
            key={uuidv1()}
          ></Web3providerName>
        ))}
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
}

export default Web3providerNameContainer;
