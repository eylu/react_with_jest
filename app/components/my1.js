/* @flow */

import * as React from 'react';

export default class MyComponent extends React.Component<{}, { count: number }> {

  state = {
    count: 0
  };

  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    // To access your button instance use `event.currentTarget`.
    (event.currentTarget: HTMLButtonElement);

    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>
          Increment
        </button>
      </div>
    );
  }
}