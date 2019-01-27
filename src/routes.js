import React from 'react'
import * as Page from './Containers'
import {Route, Switch, Redirect} from 'react-router-dom'

export default class Routes extends React.Component {
  render() {
    const {mobile, user} = this.props
    return (
      <Switch>
        <Route exact path="/home" component={Page.Home} />
        <Route exact path="/art" component={Page.Art} />
        <Route exact path="/code" component={Page.Code} />
        <Route exact path="/about" component={Page.Contact} />        
        <Redirect exact from="/" to="/home" />
      </Switch>
    )
  }
}

// <Route
//           exact
//           path="/contact"
//           render={routeProps => (
//             <Page.Contact mobile={mobile} user={user} {...routeProps} />
//           )}
//         />