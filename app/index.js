import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// styles
// import "./assets/stylesheets/core.css";

// components
import Link from './components/link';
import Check from './components/checkBoxWithLabel';

ReactDOM.render(
    <div>
      <Link page="http://www.baidu.com">Link</Link>
      <Check labelOn="On" labelOff="Off" />
    </div>,
    document.getElementById('root')
);