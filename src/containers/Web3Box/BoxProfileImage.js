import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function BoxProfileImage(props) {
  const { injected, image } = props;
  const { connected, accounts } = injected;
  const profileImageParentLocations = $(
    "*[id*=web3-box-profileImageParent]:visible"
  );
  const profileImageChildLocations = $(
    "*[id*=web3-box-profileImageChild]:visible"
  );

  if (
    profileImageParentLocations &&
    profileImageParentLocations.length > 0 &&
    profileImageChildLocations &&
    profileImageChildLocations.length > 0 &&
    connected &&
    accounts.length > 0 &&
    image &&
    image[0].contentUrl["/"]
  ) {
    const ipfs = image[0].contentUrl["/"];
    return profileImageParentLocations.map(e => {
      $(profileImageParentLocations[e]).remove();
      return ReactDOM.createPortal(
        <img
          src={`https://cloudflare-ipfs.com/ipfs/${ipfs}`}
          className={`profileimage`}
        ></img>,
        profileImageChildLocations
      );
    });
  } else {
    return <Fragment></Fragment>;
  }
}
export default BoxProfileImage;
