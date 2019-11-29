import React, { useRef, useEffect } from 'react';
import ReactDOM from "react-dom";

const parent = document.getElementById('portal')
function UsePortal(props) {

   

  return ReactDOM.createPortal(<div>Address {props.address}</div>, parent);

}
export default UsePortal;