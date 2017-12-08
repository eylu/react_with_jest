import React from "react";
import { shallow, mount, render } from "enzyme";
import GiftList from "../../../app/components/dashboard/_giftList";

// const giftList = mount(<GiftList title="title" data={[]} />);
// const giftList = mount(<GiftList title={123} data={[]} />);
let giftList;

beforeEach(()=>{
  giftList = mount(<GiftList title="title" data={[]} />);
})

describe("Component GiftList:", () => {

  // test props
  it('should has properties: title, data', () => {
    // console.log(giftList.props());
    // console.log(giftList.node.props);
    let props = giftList.props();
    expect(props).toHaveProperty("title");
    expect(props).toHaveProperty("data");
    expect(typeof props.title).toEqual("string");
  });

  // test state
  it('should start with an empty list', () => {
    expect(giftList.state('beers')).toEqual([]);
  });

  // test dom
  it('should has one title', () => {
    expect(giftList.find('h4').length).toEqual(1);
  });

  // test event
  it('adds items to the list', () => {
    giftList.instance().addItem('Sam Adams');
    expect(giftList.state('beers')[0].name).toEqual('Sam Adams');
  });

});
