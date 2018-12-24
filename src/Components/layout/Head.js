import React from 'react'
import '../../App.less'

export default class Head extends React.Component {
  render() {
    return (
      <div className="header">
        <button className="nav-toggle" onClick={() => this.props.navControl()}>
          Collapse
        </button>
      </div>
    )
  }
}
