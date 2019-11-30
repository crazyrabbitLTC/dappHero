import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("box-website");
$(parent).empty();

function BoxWebsite(props) {
  return ReactDOM.createPortal(<Fragment>{props.website}</Fragment>, parent);
}
export default BoxWebsite;
