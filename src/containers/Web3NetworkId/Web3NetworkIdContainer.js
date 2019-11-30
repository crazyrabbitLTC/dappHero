import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import uuidv1 from "uuid/v1";
import $ from "jquery";
import Web3NetworkId from "./Web3NetworkId";

function Web3NetworkIdContainer(props) {
  const { injected } = props;
  const { connected, accounts, networkId } = injected;
  const networkIdLocations = $("*[id*=web3-networkId]:visible");

  if (
    networkIdLocations &&
    networkIdLocations.length > 0 &&
    connected &&
    accounts.length > 0
  ) {
    return (
      <Fragment>
        {networkIdLocations.map((e, index) => (
          <Web3NetworkId
            networkId={networkId}
            domElement={networkIdLocations[e]}
            key={uuidv1()}
          ></Web3NetworkId>
        ))}
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
}

export default Web3NetworkIdContainer;
