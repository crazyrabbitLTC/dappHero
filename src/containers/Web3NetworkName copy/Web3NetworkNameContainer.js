import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import uuidv1 from "uuid/v1";
import $ from "jquery";
import Web3NetworkName from "./Web3NetworkName";

function Web3NetworkNameContainer(props) {
  const { injected } = props;
  const { connected, accounts, networkName } = injected;
  const networkNameLocations = $("*[id*=web3-networkName]:visible");

  if (
    networkNameLocations &&
    networkNameLocations.length > 0 &&
    connected &&
    accounts.length > 0
  ) {
    return (
      <Fragment>
        {networkNameLocations.map((e, index) => (
          <Web3NetworkName
            networkName={networkName}
            domElement={networkNameLocations[e]}
            key={uuidv1()}
          ></Web3NetworkName>
        ))}
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
}

export default Web3NetworkNameContainer;
