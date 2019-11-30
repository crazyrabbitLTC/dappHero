import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("box-name");
$(parent).empty();

function BoxName(props) {
  return ReactDOM.createPortal(<Fragment>{props.name}</Fragment>, parent);
}
export default BoxName;
