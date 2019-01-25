import React from 'react'
import Icons from './icons/index.js'
import './icons.less'
console.log('at top',Icons)
export default class Navigation extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.type
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      type: nextProps.type
    }
  }

  render() {
    const { type } = this.state
    console.log(type, Icons[type])
    console.log(Icons)
    return <img className="toe-icon" src={Icons[type]} />
  }
}
