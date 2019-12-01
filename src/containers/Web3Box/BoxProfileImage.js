import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

class BoxProfileImage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const ipfsHash = this.props.image[0].contentUrl['/']

    this.imageElement = document.getElementById(
      this.props.domElement.id,
    )





    this.imageElement.setAttribute(
      'src',
      `https://cloudflare-ipfs.com/ipfs/${ipfsHash}`,
    )
  }

  render() {
    return null
  }
}

export default BoxProfileImage
