import React, { useState, useEffect, Fragment } from 'react'
import $ from 'jquery'
import Box from '3box'
import BoxName from './BoxName'
import BoxProfileImage from './BoxProfileImage'
import BoxWebsite from './BoxWebsite'

function Web3BoxContainer(props) {
  const { injected } = props
  const { accounts } = injected

  const [state, setState] = useState({})

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      getBox()
    }
  }, [accounts])

  const getBox = async () => {
    const profile = await Box.getProfile(accounts[0])

    setState({ ...profile })
  }

  return (
    <Fragment>
      <BoxName name={state.name} injected={injected}></BoxName>
      <BoxProfileImage
        image={state.image}
        injected={injected}
      ></BoxProfileImage>
      <BoxWebsite
        website={state.website}
        injected={injected}
      ></BoxWebsite>
    </Fragment>
  )
}
export default Web3BoxContainer
