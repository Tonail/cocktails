import React from 'react'
import Icons from './icons/'
import './icons.less'

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
    return <img className="toe-icon" src={Icons[type]} />
  }
}
