import React, { useState, useEffect, Fragment } from "react";
import deployContract from "./utils/deployContract";
import $ from "jquery";

function Web3ERC20Deploy(props) {
  const { injected } = props;
  const { accounts, lib } = injected;

  console.log("in Deploy")
  if (injected && accounts && accounts.length > 0) {
    return (
      <Fragment>
        <button
          onClick={() => {
            deployContract(lib, accounts);
          }}
        >
          Deploy
        </button>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <button>Not ready</button>
      </Fragment>
    );
  }
}

export default Web3ERC20Deploy;
