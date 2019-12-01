import React, { useState, useEffect, Fragment } from "react";
import deployedContract from "./utils/deployedContract";
import ReactDOM from "react-dom";
import uuidv1 from "uuid/v1";
import $ from "jquery";
import Web3ERC20Deploy from "./components/Web3ERC20Deploy";
import deployContract from "./utils/deployContract";

function Web3ERC20Container(props) {
  const { injected } = props;
  const { connected, accounts, networkName, lib } = injected;

  const addressHardCoded = "0xAbE90d976BFF27bE1530899032f7fBEAD5143e6f";
  const [contractAddress, setContractAddress] = useState(null);
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    const loadContract = async address => {
      let instance = deployedContract(lib, address);
      setInstance(instance);
    };

    if (!instance) {
      console.log("Loading Contract");
      loadContract(contractAddress || addressHardCoded);
    }
  }, [contractAddress]);

  return (
    <Fragment>
      <div>
        Instance Address:{" "}
        {typeof instance && instance && instance.options
          ? instance.options.address
          : "None found"}
      </div>
      <Web3ERC20Deploy
        injected={injected}
        setAddress={setContractAddress}
        setInstance={setInstance}
      ></Web3ERC20Deploy>
    </Fragment>
  );
}
export default Web3ERC20Container;
