import React, { Component } from "react";
import { Router, Route, browserHistory, hashHistory, IndexRoute } from "react-router";

/**
 * import pages
 */

import Login from "../components/login";
import List from "../components/list";

/**
 * initialize a root component named App
 */
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

/**
 * initialize a component with Router , and export as default
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="login" component={Login} />
    <Route path="list" component={List} />
  </Route>
);
