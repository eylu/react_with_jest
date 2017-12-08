// @flow

import React, { Component } from "react";

type Props = {
  onSubmit: Function
};

type State = {
  text: string
};


export default class InputArea extends Component<Props, State> {

  constructor(props: Props){
    super(props);

    this.state = {
      text: "",
    };
  }

  clearInput = () => {
    this.setState({
      text: ""
    });
  };

  setText = (evt: SyntheticInputEvent<>) => {
    this.setState({
      text: evt.target.value,
    });
  };

  handleAdd = () => {
    // alert(123);
    let value = this.state.text;
    if (value) {
      this.props.onSubmit(value);
      this.clearInput();
    }
  };

  render() {
    return(
      <div>
        <input value={this.state.text} onChange={this.setText} />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}