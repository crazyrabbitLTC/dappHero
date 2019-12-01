import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function Web3ProviderName(props) {
  const { providerName, domElement } = props;

  // $(domElement).empty();
  // return ReactDOM.createPortal(<Fragment>{providerName}</Fragment>, domElement);
  $(domElement).text((providerName))
  return null;
}
export default Web3ProviderName;
