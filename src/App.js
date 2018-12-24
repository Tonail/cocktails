import React from 'react'
import Layout from './Components/layout/'
import { Home, Contact } from './Containers'

const { Navigation, Content, Header, Footer } = Layout
const initState = () => ({ navState: false, page: Home })

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

    return (
      <div id="layout" className={`App background`}>
        <Header navControl={this.toggleNav.bind(this)} />
        <Navigation visible={navState} />
        <Content display={page} />
        <Footer />
      </div>
    )
  }
}

export default App
