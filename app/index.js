/* @flow */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// styles
// import "./assets/stylesheets/core.css";

// components
import Link from './components/link';
import Check from './components/checkBoxWithLabel';

import FlowTestProps from './components/flowTestProps';
import FlowTestButton from './components/flowTestButton';


ReactDOM.render(
    <div>
      <Link page="http://www.baidu.com">Link</Link>
      <Check labelOn="On" labelOff="Off" />
      <FlowTestProps foo={13} />
      <FlowTestButton count={22} />
    </div>,
    document.getElementById('root')
);