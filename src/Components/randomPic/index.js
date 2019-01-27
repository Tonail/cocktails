import React from 'react'
import request from '../../utils/request.js'
import './randomPic.less'
import 'whatwg-fetch'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null
    }
  }
  componentDidMount() {
    this.fetchPic()
  }
  fetchPic() {
    fetch('https://picsum.photos/1200/300/?random').then( res => {
          console.log('fetch',res)
          this.setState({image: res.url})
        }
      )
  }

  render() {
    const { image } = this.state
    console.log(image)
    return <div className='full-width fill-grey' >
    {image && (<img className="full-width" src={image} />) }
      </div>
  }
}
