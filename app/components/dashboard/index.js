// @flow

import React, { Component } from "react";

import GiftList from "./_giftList";

type Props = {};

export default class Home extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>this is home page!</h1>
        <GiftList title="Your gist list" data={data} />
      </div>
    );
  }
}

const data = [
  {
    id: 1,
    name: "aaaa",
  },
  {
    id: 2,
    name: "bbbb",
  },
];
