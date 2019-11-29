import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useWeb3Injected } from "@openzeppelin/network/react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import UsePortal from "./components/UsePortal";

function App() {
  const [count, setCount] = useState(0);
  const injected = useWeb3Injected();
  const {
    accounts,
    networkId,
    networkName,
    providerName,
    lib,
    connected
  } = injected;

  useEffect(async () => {
    await injected.requestAuth();
  }, []);

  console.log(injected);
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>
        Accounts: {accounts} NetworkID: {networkId} NetworkNAme: {networkName}{" "}
        ProviderName: {providerName}
      </p>
      <UsePortal address={accounts}>Thinking with Portals</UsePortal>
    </div>
  );
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("react-target")
);
