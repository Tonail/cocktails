import React from 'react'
import Layout from './Components/layout/'
// import * as Pages from './Containers'
import { Router, Route, Link } from 'react-router-dom'
import Routes from './routes.js'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const location = history.location;
const { Navigation, Content, Header, Footer } = Layout

const initState = () => ({ navState: false})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = initState()
  }

  // toggles navigtion visblility
  toggleNav(e) {
    const { navState } = this.state
    this.setState({ navState: !navState })
  }

  render() {
    const { navState, page } = this.state
    // const display = <Routes/>
    return (
      <Router history={history}>
        <div id="layout" className={`App background`}>
          <Header navControl={this.toggleNav.bind(this)} />
          <Navigation visible={navState} />
          <Content>
            <Routes key='router'/>
          </Content>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
