import React from 'react'
import request from '../../utils/request.js'
import './randomPic.less'
import 'whatwg-fetch'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.imageFetch = null
    this.qouteFetch = null
    this.state = {
      image: null,
      qoute: null
    }
  }
  componentDidMount() {
    this.loadData()
  }
  componentWillUnmount() {
    this.clearIntervals()
  }
  clearIntervals = () => {
    clearInterval(this.imageFetch);
    clearInterval(this.qouteFetch);
  }

  loadData = () => {
    const {speed} = this.props
    // this.fetchPic()
    this.fetchQoute()
    if(!this.imageFetch) { 
      this.imageFetch = setInterval(this.fetchPic, speed ? speed : 5000);
    }
    if(!this.qouteFetch) { 
      this.qouteFetch = setInterval(this.fetchQoute, speed ? speed : 5000);
    }
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

    try {
      const res = await fetch('https://quota.glitch.me/random')
      const data = await res.json()

      console.log(`${data.quoteText} -${data.quoteAuthor}`)
      
      this.setState({qoute: data})
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const { image, qoute } = this.state
    console.log(qoute)
    return <div className='random-img width-full fill-grey centered-column' >
    {qoute && (
      <div className='random-qoute full-height centered-column absolute'>
        <h3>{qoute.quoteText}</h3>
        <h4>{qoute.quoteAuthor}</h4>
      </div>
      ) }
    {image && (<img className="width-full relative" src={image} />) }
      </div>
  }
}
