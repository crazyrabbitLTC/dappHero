import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";



function BoxName(props) {
  const { injected, name } = props;
  const { connected, accounts } = injected;
  const boxNameLocations = $("*[id*=web3-box-name]:visible");

  if (
    boxNameLocations &&
    boxNameLocations.length > 0 &&
    connected &&
    accounts.length > 0
  ) {
    return (
      boxNameLocations.map(e => {
        $(boxNameLocations[e]).empty();
        return (
          ReactDOM.createPortal(<Fragment>{name}</Fragment>, boxNameLocations[e])
        )
      })
    )
  } else {
    return <Fragment></Fragment>;
  }
}
export default BoxName;

