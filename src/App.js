import React, { Component } from 'react';

import Layout from './Components/layout/'
import './App.css';

const {Navigation, Content, Header, Footer} = Layout

const initState = () => ({nav: false})

class App extends Component {
  constructor(props){
    super(props)
    this.state = initState()
  }

  toggleNav() {}
  _toggleNav(state) {
    return state ? 'nav-visible' : 'nav-hidden' 
  }

  render() {
    console.log(this)
    const {nav} = this.state 
    
    return (
      <div id='layout' className={`App background ${this._toggleNav(nav)}`}>
       <Header/>
       <Navigation/>
       <Content/>
       <Footer/>
      </div>
    );
  }
}

export default App;
