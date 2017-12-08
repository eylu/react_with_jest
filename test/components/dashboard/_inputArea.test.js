import React from "react";
import { shallow, mount, render } from "enzyme";
import { spy } from 'sinon';

import GiftList from "../../../app/components/dashboard/_giftList";
import InputArea from "../../../app/components/dashboard/_inputArea";

let giftList;
let inputArea;
beforeEach(()=>{
  giftList = mount(<GiftList title="title" data={[]} />);
  inputArea = mount(<InputArea  />);
})

describe("Component InputArea:", () => {

  it('passes addItem to InputArea', () => {
    const inputArea = giftList.find(InputArea);
    const addItem = giftList.instance().addItem;
    expect(inputArea.prop('onSubmit')).toEqual(addItem);
  });

  it('passes a bound addItem function to InputArea', () => {
    const wrapper = giftList.find(InputArea);
    wrapper.prop('onSubmit')('Sam Adams');
    expect(giftList.state('beers')[0].name).toEqual('Sam Adams');
  });

  it('should accept input', () => {
    const input = inputArea.find('input');
    input.simulate('change', {target: { value: 'Resin' }});
    expect(inputArea.state('text')).toEqual('Resin');
    expect(input.prop('value')).toEqual('Resin');
  });

  it('should call onSubmit when Add is clicked', () => {
    const addItemSpy = spy();
    const wrapper = shallow(<InputArea onSubmit={addItemSpy}/>);
    wrapper.setState({text: 'Octoberfest'});
    const addButton = wrapper.find('button');

    addButton.simulate('click');

    expect(addItemSpy.calledOnce).toBe(true);
    expect(addItemSpy.calledWith('Octoberfest')).toBe(true);
  });
});
