import React, { useState, useEffect, Fragment } from "react";
import $ from "jquery";
import Box from "3box";
import BoxName from "./Web3Box/BoxName";
import BoxProfileImage from "./Web3Box/BoxProfileImage";
import BoxWebsite from "./Web3Box/BoxWebsite";


function Web3Box(props) {
  const { injected } = props;
  const { accounts } = injected;
  console.log("In the box");

  const [state, setState] = useState({});

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      getBox();
    }
  }, [accounts]);

  const getBox = async () => {
    const profile = await Box.getProfile(accounts[0]);
    console.log(profile)//usefull to see the object from 3box
    setState({ ...profile });
  };

  return (
    <Fragment>
      <BoxName name={state.name}></BoxName>
      <BoxProfileImage image={state.image}></BoxProfileImage>
      <BoxWebsite website={state.website}></BoxWebsite>
    </Fragment>
  );
}
export default Web3Box;
