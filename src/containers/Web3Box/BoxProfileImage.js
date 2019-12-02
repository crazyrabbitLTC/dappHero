import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

class BoxProfileImage extends React.Component {
  constructor(props) {
    super(props)

    //This is probably not nessesary
    while (this.props.domElement.firstChild) {
      this.props.domElement.removeChild(
        this.props.domElement.firstChild,
      )
    }
  }

  componentDidMount() {
    const ipfsHash = this.props.image[0].contentUrl['/']

    this.imageElement = document.getElementById(
      this.props.domElement.id,
    )

    //There are a number of src attributes availible8 on a webflow image.
    this.imageElement.setAttribute(
      'src',
      `https://cloudflare-ipfs.com/ipfs/${ipfsHash}`,
    )

    this.imageElement.removeAttribute('srcset')
  }

  render() {
    console.log('The props: ', this.props)

    return null
  }
}

export default BoxProfileImage
