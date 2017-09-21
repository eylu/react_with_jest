/* @flow */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// styles
// import "./assets/stylesheets/core.css";

// components
import Link from './components/link';
import Check from './components/checkBoxWithLabel';

// import MyComponent from './components/flowTest';
// import MyComponent from './components/my1.js';
// import MyComponent from './components/my2.js';
// import MyComponent from './components/my3.js';
import  MyComponent  from './components/my4.js';



ReactDOM.render(
    <div>
      <Link page="http://www.baidu.com">Link</Link>
      <Check labelOn="On" labelOff="Off" />
      <MyComponent foo='asd' />
    </div>,
    document.getElementById('root')
);