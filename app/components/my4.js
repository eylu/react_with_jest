/* @flow */

import { mapProps } from 'recompose';
import * as React from 'react';


type Props = {
  bar: number
};

function MyComponent({ bar }: Props) {
  return <div>{bar}</div>;
}

export default mapProps(
  ({ foo }) => ({ bar: foo + 1 }),
)(MyComponent);

