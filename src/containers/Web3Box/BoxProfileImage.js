// import React, { useRef, useEffect, Fragment } from 'react'
// import ReactDOM from 'react-dom'
// import $ from 'jquery'

// function BoxProfileImage(props) {
//   const { injected, image } = props
//   const { connected, accounts } = injected
//   const profileImageParentLocations = $(
//     '*[id*=web3-box-profileImageParent]:visible',
//   )
//   const profileImageChildLocations = $(
//     '*[id*=web3-box-profileImageChild]:visible',
//   )

//   if (
//     profileImageParentLocations &&
//     profileImageParentLocations.length > 0 &&
//     profileImageChildLocations &&
//     profileImageChildLocations.length > 0 &&
//     connected &&
//     accounts.length > 0 &&
//     image &&
//     image[0].contentUrl['/']
//   ) {
//     const ipfs = image[0].contentUrl['/']
//     return profileImageParentLocations.map(e => {
//       $(profileImageChildLocations[e]).remove()
//       return ReactDOM.createPortal(
//         <img
//           src={`https://cloudflare-ipfs.com/ipfs/${ipfs}`}
//           className={`profileimage`}
//         ></img>,
//         profileImageParentLocations[e],
//       )
//     })
//   } else {
//     return <Fragment></Fragment>
//   }
// }
// export default BoxProfileImage


import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

class BoxProfileImage extends React.Component {
  constructor(props) {
    super(props)

    while (this.props.domElement.firstChild) {
      this.props.domElement.removeChild(
        this.props.domElement.firstChild,
      )
    }
  }

  render() {

    const ipfsHash = this.props.image[0].contentUrl['/']

    return ReactDOM.createPortal(
      <img
          src={`https://cloudflare-ipfs.com/ipfs/${ipfsHash}`}
          className={`profileimage`}
        ></img>,
      document.getElementById(this.props.domElement.id),
    )
  }
}

export default BoxProfileImage
