import React, { useState, useEffect, Fragment } from "react";
import deployContract from "../utils/deployContract";

function Web3ERC20Deploy(props) {
  const { injected, setAddress, setInstance } = props;
  const { accounts, lib } = injected;

  const deploy = async () => {
    let instance = await deployContract(lib, accounts);

    setAddress(instance.options.address);
    setInstance(instance);
  };

  if (injected && accounts && accounts.length > 0) {
    return (
      <Fragment>
        <button
          onClick={() => {
            deploy();
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
