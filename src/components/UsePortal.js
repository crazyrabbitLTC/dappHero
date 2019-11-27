import React, { useRef, useEffect } from 'react';
import ReactDOM from "react-dom";

const parent = document.getElementById('portal')
function UsePortal() {


  return ReactDOM.createPortal(<div>HERE IS A PORTAL</div>, parent);

}
export default UsePortal;