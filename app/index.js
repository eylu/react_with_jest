/* @flow */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// styles
// import "./assets/stylesheets/core.css";

// components
import Link from './components/link';
import Check from './components/checkBoxWithLabel';

import FlowTest from './components/flowTest';


ReactDOM.render(
    <div>
      <Link page="http://www.baidu.com">Link</Link>
      <Check labelOn="On" labelOff="Off" />
      <FlowTest foo={13} />
    </div>,
    document.getElementById('root')
);