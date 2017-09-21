/* @flow */

import * as React from 'react';

// type Props = {
//   children?: React.Node,
// };

type ReactNodeWithoutStrings = React.ChildrenArray<
  | void
  | null
  | boolean
  | number
  | React.Element<any>
>;

type Props = {
  children?: ReactNodeWithoutStrings,
};

export default class MyComponent extends React.Component<Props> {

  componentDidMount(){
    console.log(this.props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}