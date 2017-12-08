// @flow

import React, { Component } from "react";

import InputArea from "./_inputArea";

type Props = {
  title: string,
  data: Array<{id: number, name: string}>
};

type State = {
  beers: Array<{id: number, name: string}>,
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

  componentDidMount() {
    this.setState({
      beers: this.props.data,
    });
  }

  addItem = (name: string) => {
    this.setState({
      beers: [].concat(this.state.beers).concat([{
        id: Date.now(),
        name: name
      }])
    });
  };

  render() {
    return (
      <div>
        <h4>{this.props.title} {this.state.title}</h4>
        <InputArea onSubmit={this.addItem}/>
        <ul>
          {this.state.beers.map((item, i) => {
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

