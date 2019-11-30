import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useWeb3Injected } from "@openzeppelin/network/react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import Web3AddressContainer from "./containers/Web3Address/Web3AddressContainer";
import Web3BalanceContainer from "./containers/Web3Balance/Web3BalanceContainer";
import Web3NetworkIdContainer from "./containers/Web3NetworkId/Web3NetworkIdContainer";
import Web3ProviderNameContainer from "./containers/Web3ProviderName/Web3ProviderNameContainer";
import Web3NetworkNameContainer from "./containers/Web3NetworkName/Web3NetworkNameContainer";
import Web3EnableButton from "./components/Web3EnableButton";
import Web3Box from "./components/Web3Box";

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

  return (
    <div>
      <Web3Box injected={injected}></Web3Box>
      <Web3AddressContainer injected={injected}></Web3AddressContainer>
      <Web3NetworkIdContainer injected={injected}></Web3NetworkIdContainer>
      <Web3ProviderNameContainer injected={injected}></Web3ProviderNameContainer>
      <Web3NetworkNameContainer injected={injected}></Web3NetworkNameContainer>
      <Web3EnableButton injected={injected}></Web3EnableButton>
      <Web3BalanceContainer injected={injected}></Web3BalanceContainer>
    </div>
  );
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("react-target")
);
