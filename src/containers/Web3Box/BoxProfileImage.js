import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("box-profileImage");

function BoxProfileImage(props) {
  console.log(props);
  if (props.image && props.image[0].contentUrl["/"]) {
    const ipfs = props.image[0].contentUrl["/"];
    $(parent).empty();
    return ReactDOM.createPortal(<Fragment> {ipfs}</Fragment>, parent);
  } else {
    return ReactDOM.createPortal(
      <Fragment> </Fragment>,
      parent
    );
  }
}
export default BoxProfileImage;
