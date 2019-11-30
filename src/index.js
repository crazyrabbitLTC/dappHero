import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useWeb3Injected } from "@openzeppelin/network/react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import Web3AddressContainer from "./containers/Web3Address/Web3AddressContainer"
import Web3BalanceContainer from "./containers/Web3Balance/Web3BalanceContainer"
import Web3NetworkId from "./components/Web3NetworkId";
import Web3ProviderName from "./components/Web3ProviderName";
import Web3NetworkName from "./components/Web3NetworkName";
import Web3EnableButton from "./components/Web3EnableButton";
import Web3Box from "./containers/Web3Box";

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

  console.log(lib)
  // return (
  //   <div>
  //     <Web3Address address={accounts}></Web3Address>
  //     <Web3NetworkId networkId={networkId}></Web3NetworkId>
  //     <Web3ProviderName providerName={providerName}></Web3ProviderName>
  //     <Web3NetworkName networkName={networkName}></Web3NetworkName>
  //     <Web3EnableButton injected={injected}></Web3EnableButton>
  //     <Web3Box injected={injected}></Web3Box>
  //     <Web3EnableButton injected={injected}></Web3EnableButton>
  //   </div>
  // );

  return (
    <div>
    <Web3Box injected={injected}></Web3Box>
      <Web3AddressContainer injected={injected}></Web3AddressContainer>
      <Web3NetworkId networkId={networkId}></Web3NetworkId>
      <Web3ProviderName providerName={providerName}></Web3ProviderName>
      <Web3NetworkName networkName={networkName}></Web3NetworkName>
      <Web3EnableButton injected={injected}></Web3EnableButton>
      <Web3BalanceContainer injected={injected}></Web3BalanceContainer>
    </div>
  );
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("react-target")
);
