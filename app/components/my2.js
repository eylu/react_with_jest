/* @flow */

import * as React from 'react';

export default class MyComponent extends React.Component<{}, { count: string }> {

  state = {
    count: ''
  };

  handleChange = (event: SyntheticInputEvent<>) => {
    let value = event.target.value;
    this.setState({
      count: value
    });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <input onChange={this.handleChange} />
      </div>
    );
  }
}