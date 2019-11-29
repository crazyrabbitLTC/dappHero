import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("portal");
$(parent).empty();
function UsePortal(props) {

  console.log("Try to remove element");

  return ReactDOM.createPortal(<div>Address {props.address}</div>, parent);
}
export default UsePortal;
