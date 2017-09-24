/* @flow */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { hashHistory, Router } from "react-router";
import { syncHistoryWithStore, routerMiddleware, push } from "react-router-redux";
import logger from "redux-logger";
import setAuthorizationToken from "./utils/setAuthorizationToken";

// styles
// import "./assets/stylesheets/core.css";

import rootReducer from "./reducers/rootReducer";
/**
 * import configs
 */
import routes from "./config/router";

import rootSaga from "./sagas/rootSaga";

/**
 * axios configs
 */
import setDefaultContentType from "./utils/setDefaultContentType";
import {updateCurrentUser} from "./actions/auth";


const reduxRouterMiddleware = routerMiddleware(hashHistory);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware,reduxRouterMiddleware];
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
  )
);

sagaMiddleware.run(rootSaga);
setDefaultContentType();
const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");
if (token && userId) {
    setAuthorizationToken(token);
    store.dispatch(updateCurrentUser(userId));   
  } else {
    localStorage.removeItem("token");
    store.dispatch(push("/login"))
}

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
);