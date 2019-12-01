import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";

import $ from "jquery";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { useWeb3Injected } from "@openzeppelin/network/react";
import uuidv1 from "uuid/v1";
import Web3AddressContainer from "./containers/Web3Address/Web3AddressContainer";
import Web3BalanceContainer from "./containers/Web3Balance/Web3BalanceContainer";
import Web3NetworkIdContainer from "./containers/Web3NetworkId/Web3NetworkIdContainer";
import Web3ProviderNameContainer from "./containers/Web3ProviderName/Web3ProviderNameContainer";
import Web3NetworkNameContainer from "./containers/Web3NetworkName/Web3NetworkNameContainer";
import Web3EnableButton from "./containers/Web3EnableButton/Web3EnableButton";
import Web3BoxContainer from "./containers/Web3Box/Web3BoxContainer";
import Web3GasPriceContainer from "./containers/Web3GasPrice/Web3GasPriceContainer";

function App() {
  const injected = useWeb3Injected();

  const elements = $('[id^="web3-"]');

  const reducer = request => {
    switch (request.arg) {
      case "address":
        return (
          <Web3AddressContainer
            key={uuidv1()}
            injected={injected}
            domElement={request.el}
          ></Web3AddressContainer>
        );
        break;

      case "networkId":
        return (
          <Web3NetworkIdContainer
            key={uuidv1()}
            injected={injected}
            domElement={request.el}
          ></Web3NetworkIdContainer>
        );
        break;

      case "providerName":
        return (
          <Web3ProviderNameContainer
            key={uuidv1()}
            injected={injected}
            domElement={request.el}
          ></Web3ProviderNameContainer>
        );
        break;

      case "networkName":
        return (
          <Web3NetworkNameContainer
            key={request.index}
            keyValue={request.index}
            injected={injected}
            domElement={request.el}
          ></Web3NetworkNameContainer>
        );
        break;

      case "enableButton":
        return (
          <Web3EnableButton
            key={request.index} //Needed to prevent React Key issue
            injected={injected}
            domElement={request.el}
          ></Web3EnableButton>
        );
        break;

      case "balance":
        return (
          <Web3BalanceContainer
            key={uuidv1()}
            injected={injected}
            domElement={request.el}
          ></Web3BalanceContainer>
        );
        break;

      case "gasPrice":
        return (
          <Web3GasPriceContainer
          key={request.index}
          keyValue={request.index}
            injected={injected}
            domElement={request.el}
          ></Web3GasPriceContainer>
        );
        break;

      // case "box":
      //   return <Web3BoxContainer injected={injected}></Web3BoxContainer>;
      //   break;

      // case a:
      //     return
      //     break;

      default:
        return <div key={uuidv1()}></div>;
    }
  };

  return (
    <Fragment>
      {elements.map(element => {
        const domElementId = elements[element].id;
        const requestString = domElementId.split("-");
        return reducer({
          arg: requestString[1],
          el: elements[element],
          index: element
        });
      })}
    </Fragment>
  );
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("react-target")
);
