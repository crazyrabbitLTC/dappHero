import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("box-website");


function BoxWebsite(props) {
  const { injected } = props;
  const { connected, accounts } = injected;

  if (connected && accounts.length > 0) {
    $(parent).empty();
    return ReactDOM.createPortal(<Fragment>{props.website}</Fragment>, parent);
  } else {
    return <Fragment></Fragment>;
  }
}
export default BoxWebsite;
