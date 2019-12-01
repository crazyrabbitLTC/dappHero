import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import uuidv1 from "uuid/v1";
import $ from "jquery";
import Web3Balance from "./Web3Balance";

function Web3BalanceContainer(props) {
  const { injected, domElement, keyValue } = props;
  const { connected, accounts, lib } = injected;

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const getBalance = async () => {
      let balance;
      try {
        if(accounts[0]){
        balance = await lib.eth.getBalance(accounts[0]);
        balance = lib.utils.fromWei(balance, "ether");
        } else {
          balance = "0"
        }
      } catch (error) {
        console.log(error);
      }
      setBalance(balance);
    };

    if (connected) {
      getBalance();
    }
  }, [connected]);

  if (connected && accounts.length > 0) {
    return (
      <Web3Balance
        balance={balance}
        domElement={domElement}
        key={keyValue}
      ></Web3Balance>
    );
  } else {
    return <Fragment key={keyValue}></Fragment>;
  }
}

export default Web3BalanceContainer;
