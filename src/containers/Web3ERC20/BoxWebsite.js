import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function BoxWebsite(props) {
  const { injected , website} = props;
  const { connected, accounts } = injected;
  const boxWebsiteLocations = $("*[id*=web3-box-website]:visible");

  if (
    boxWebsiteLocations &&
    boxWebsiteLocations.length > 0 &&
    connected &&
    accounts.length > 0
  ) {
    return boxWebsiteLocations.map(e => {
      $(boxWebsiteLocations[e]).empty();
      return ReactDOM.createPortal(
        <Fragment>{website}</Fragment>,
        boxWebsiteLocations[e]
      );
    });

    return;
  } else {
    return <Fragment></Fragment>;
  }
}
export default BoxWebsite;
