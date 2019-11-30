import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("box-profileImage");
const child = document.getElementById("box-profileImageLocation");

function BoxProfileImage(props) {

  if (parent && child && props.image && props.image[0].contentUrl["/"]) {
    const ipfs = props.image[0].contentUrl["/"];
    $(parent).remove();
    return ReactDOM.createPortal(
      <img
        src={`https://cloudflare-ipfs.com/ipfs/${ipfs}`}
        className={`profileimage`}
      ></img>,
      child
    );
  } else {
    return <Fragment></Fragment>;
  }
}
export default BoxProfileImage;
