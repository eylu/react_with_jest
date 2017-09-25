// @flow

import React, { Component } from "react";

type Props = {
  title: string,
  data: Array<{id: number, name: string}>
};

export default class GiftList extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
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

