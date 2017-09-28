// @flow

import React, { Component } from "react";

import InputArea from "./_inputArea";

type Props = {
  title: string,
  data: Array<{id: number, name: string}>
};

type State = {
  beers: Array<string>,
  title: string,
};

export default class GiftList extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      beers: [],
      title: "run working",
    };
  }

  addItem(name: string) {
    this.setState({
      beers: [].concat(this.state.beers).concat([name])
    });
  }

  render() {
    return (
      <div>
        <h4>{this.props.title} {this.state.title}</h4>
        <InputArea onSubmit={() => {this.addItem("")}}/>
        <ul>
          {this.props.data.map((item, i) => {
            return (
              <li key={i}>
                {item.id} - {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

