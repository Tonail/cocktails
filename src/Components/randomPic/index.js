import React from 'react'
import request from '../../utils/request.js'
import './randomPic.less'
import 'whatwg-fetch'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.imageFetch = null
    this.state = {
      image: null
    }
  }
  componentDidMount() {
    const {speed} = this.props
    this.fetchPic()
    this.imageFetch = setInterval(this.fetchPic, speed ? speed : 5000);
  }
  fetchPic = async () =>  {
    try {
      const res = await fetch('https://picsum.photos/1200/500/?random')
      this.setState({image: res.url})
    } catch(err) {
      console.log(err)
    }
  }
  fetchQoute = async () =>  {
    /* fetch from random qoute api if qoutes are requested in props */

    // try {
    //   const res = await fetch('https://picsum.photos/1200/500/?random')
    //   this.setState({image: res.url})
    // } catch(err) {
    //   console.log(err)
    // }
  }

  render() {
    const { image } = this.state
    console.log(image)
    return <div className='width-full fill-grey' >
    {image && (<img className="width-full" src={image} />) }
      </div>
  }
}
