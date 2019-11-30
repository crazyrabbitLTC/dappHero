import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import uuidv1 from "uuid/v1";
import $ from "jquery";
import Web3Balance from "./Web3Balance";

function Web3BalanceContainer(props) {
  const { injected } = props;
  const { connected, accounts, lib } = injected;
  const balanceLocations = $("*[id*=web3-balance]:visible");

  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const getBalance = async () => {
      let balance;
      try {
        balance = await lib.eth.getBalance(accounts[0]);
        balance = lib.utils.fromWei(balance, "ether");
      } catch (error) {
        console.log(error);
      }
      setBalance(balance);
    };

    if (connected && lib) {
      getBalance();
    }
  }, [balanceLocations]);

  if (
    balanceLocations &&
    balanceLocations.length > 0 &&
    connected &&
    accounts.length > 0
  ) {
    return (
      <Fragment>
        {balanceLocations.map((e, index) => (
          <Web3Balance
            balance={balance}
            domElement={balanceLocations[e]}
            key={uuidv1()}
          ></Web3Balance>
        ))}
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
}

export default Web3BalanceContainer;
