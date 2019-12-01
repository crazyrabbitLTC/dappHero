import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import uuidv1 from  'uuid/v1';
import $ from "jquery";
import Web3Address from "./Web3Address";

function Web3AddressContainer(props) {
  const { injected } = props;
  const { connected, accounts } = injected;

  //const addressLocations = $("*[id*=web3-address]:visible");

  console.log("In address container!")
  // if (
  //   addressLocations &&
  //   addressLocations.length > 0 &&
  //   connected &&
  //   accounts.length > 0
  // ) {
  //   return (
  //     <Fragment>
  //       {addressLocations.map(e => (
  //         <Web3Address
  //           injected={injected}
  //           domElement={addressLocations[e]}
  //           key={uuidv1()}
  //         ></Web3Address>
  //       ))}
  //     </Fragment>
  //   );
  // } else {
  //   return <Fragment></Fragment>;
  // }
  return <div>IN address container</div>
}

export default Web3AddressContainer;
