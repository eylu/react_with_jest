/* @flow */

import * as React from 'react';

type Props = {
  foo: number, // foo is required.
};

export default class FlowTest extends React.Component<Props> {
  static defaultProps = {
    foo: 42, // ...but we have a default prop for foo.
  };
  render (){
      return (
          <div>{this.props.foo}</div>
      );
  }
}