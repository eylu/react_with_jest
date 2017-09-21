/* @flow */

import * as React from "react";

type Props = {
  foo: number, // foo is required.
};

type State = {
  count: number,
};

export default class FlowTest extends React.Component<Props, State> {
  static defaultProps = {
    foo: 42,
  };

  state = {
    count: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  render() {
    return <div> {this.state.count} </div>;
  }
}
