import React, { useState, useEffect, Fragment } from 'react'
import $ from 'jquery'
import Box from '3box'
import BoxName from './BoxName'
import BoxProfileImage from './BoxProfileImage'
import BoxWebsite from './BoxWebsite'

function Web3BoxContainer(props) {
  const { injected, request, index } = props
  const { accounts } = injected

  const { el, requestString } = request

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

  const reducer = request => {
    switch (request.method) {
      case 'name':
        console.log("In the name!")
        return (
          <BoxName
            domElement={request.el}
            name={state.name}
            injected={injected}
            key={index}
          ></BoxName>
        )
        break

      case 'profileImage':
        return (
          <BoxProfileImage
            domElement={request.el}
            image={state.image}
            injected={injected}
            key={index}
          ></BoxProfileImage>
        )
        break

      case 'website':
        return (
          <BoxWebsite
            domElement={request.el}
            website={state.website}
            injected={injected}
            key={index}
          ></BoxWebsite>
        )
        break

      default:
        return <Fragment></Fragment>
    }
  }

  return reducer({
    method: requestString[2],
    el,
    requestString,
  })
}
export default Web3BoxContainer
