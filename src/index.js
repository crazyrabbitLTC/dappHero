import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import { useWeb3Injected } from "@openzeppelin/network/react";
import $ from "jquery";
import "core-js/stable";
import "regenerator-runtime/runtime";
import Web3AddressContainer from "./containers/Web3Address/Web3AddressContainer";
import Web3BalanceContainer from "./containers/Web3Balance/Web3BalanceContainer";
import Web3NetworkIdContainer from "./containers/Web3NetworkId/Web3NetworkIdContainer";
import Web3ProviderNameContainer from "./containers/Web3ProviderName/Web3ProviderNameContainer";
import Web3NetworkNameContainer from "./containers/Web3NetworkName/Web3NetworkNameContainer";
import Web3EnableButton from "./components/Web3EnableButton";
import Web3BoxContainer from "./containers/Web3Box/Web3BoxContainer";

function App() {
  const injected = useWeb3Injected();
  const {
    accounts,
    networkId,
    networkName,
    providerName,
    lib, //This is your Web3
    connected
  } = injected;

  const elements = $('[id^="web3-"]');


  const reducer = request => {
    switch (request.arg) {
      case "address":
        console.log("here!");
        return (
          <div>Hello!</div>
          // <Web3AddressContainer injected={injected} element={request.el}>
          //   Going in!
          // </Web3AddressContainer>
        );
        break;

      case "networkId":
        console.log("also here!")
        return (
          <Web3NetworkIdContainer injected={injected}></Web3NetworkIdContainer>
        );
        break;

      case "providerName":
        return (
          <Web3ProviderNameContainer
            injected={injected}
          ></Web3ProviderNameContainer>
        );
        break;

      case "networkName":
        return (
          <Web3NetworkNameContainer
            injected={injected}
          ></Web3NetworkNameContainer>
        );
        break;

      case "enableButton":
        return <Web3EnableButton injected={injected}></Web3EnableButton>;
        break;

      case "balance":
        return (
          <Web3BalanceContainer injected={injected}></Web3BalanceContainer>
        );
        break;

      // case "box":
      //   return <Web3BoxContainer injected={injected}></Web3BoxContainer>;
      //   break;

      // case a:
      //     return
      //     break;

      default:
        return <div></div>;
    }
  };

  return (
    <div>
      {elements.map(element => {
        const thing = elements[element].id;
        const foo = thing.split("-");
        return reducer({
          arg: foo[1],
          el: element
        });
      })}
    </div>
  );
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("react-target")
);
