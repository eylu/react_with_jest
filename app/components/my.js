
import * as React from 'react';


type Props = {
  foo: number, // foo is required.
};

export default class MyComponent extends React.Component<Props> {

  render() {
    return (
      <div>
        {this.props.foo}
      </div>
    );
  }
}
