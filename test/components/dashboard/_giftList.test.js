import React from "react";
import { shallow, mount, render } from "enzyme";
import GiftList from "../../../app/components/dashboard/_giftList";

const giftList = mount(<GiftList title="title" data={[]} />);
// const giftList = mount(<GiftList title={123} data={[]} />);

describe("Component GiftList:", () => {

  it('should has properties: title, data', () => {
    // console.log(giftList.node.props);
    expect(giftList.node).toHaveProperty("props.title");
    expect(giftList.node).toHaveProperty("props.data");
    expect(typeof giftList.node.props.title).toEqual("string");
  });

  it('should has one title', () => {
    expect(giftList.find('h4').length).toEqual(1);
  });
});
