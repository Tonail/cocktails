import React, { Component } from 'react'
import '../../App.less'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: null
    }
  }
  static getDerivedStateFromProps(props, state) {
    return {
      display: props.display 
    }
  }

  render() {
   const {children} = this.props
   console.log(this.props)

    return (
      <div className="content">
        {children}
      </div>
    )
  }
}
