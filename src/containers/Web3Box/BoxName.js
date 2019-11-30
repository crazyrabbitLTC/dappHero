import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const parent = document.getElementById("box-name");


function BoxName(props) {
  
  const {injected} = props;
 const {connected, accounts} = injected;

 if(connected && accounts.length > 0){
  $(parent).empty();
  return ReactDOM.createPortal(<Fragment>{props.name}</Fragment>, parent);
 } else {
   return (<Fragment></Fragment>)
 }


}
export default BoxName;
