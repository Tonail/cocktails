import React from 'react'
import '../../App.less'
import Icon from '../icon'
import {Link, Route} from 'react-router-dom'


export default class Navigation extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      expanded: this.props.visible,
      navLinks: {
        Home: { title: 'Home', icon: 'home' },
        Art: { title: 'Art', icon: 'smile' },
        Code: { title: 'Code', icon: 'coffee' },
        About: { title: 'About', icon: 'idcard' }
      }
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      expanded: nextProps.visible
    }
  }

  navigate = e => {}

  render() {
    const { expanded, navLinks } = this.state
    const navKeys = Object.keys(navLinks)

    const genNavItem = (item, expanded) => (
      <Link to={`/${item.title.toLowerCase()}`}>
        <li className="pointer" key={item.title} onClick={this.navigate}>
          {expanded ? item.title : <Icon type={item.icon} />}
        </li>
      </Link>
    )

    return (
      <div className={`navigation ${expanded ? 'expanded' : 'collapsed'}`}>
        <div className={`nav-logo ${expanded ? 'visible' : ''}`}>
          <img src={require('../../images/OCAT-header-round.svg')} />
        </div>
        <ul>{navKeys.map(key => genNavItem(navLinks[key], expanded))}</ul>
      </div>
    )
  }
}
