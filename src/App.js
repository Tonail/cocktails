import React, { Component } from "react";

import Layout from "./Components/layout/";
import "./App.less";

const { Navigation, Content, Header, Footer } = Layout;

const initState = () => ({ navState: false });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initState();
  }

  toggleNav() {}

  _toggleNav(state) {
    return state ? "nav-visible" : "nav-hidden";
  }

  render() {
    console.log(this);
    const { navState } = this.state;

    return (
      <div id="layout" className={`App background`}>
        <Header />
        <Navigation visible={this._toggleNav(navState)} />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
