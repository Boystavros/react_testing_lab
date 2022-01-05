import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  let runningTotal;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button7;
  let plus;
  let subtract;
  let multiply;
  let divide;
  let equals;
  beforeEach(() => {
    container = mount(<Calculator/>)
    runningTotal = container.find('#running-total');
    button1 = container.find('#number1');
    button2 = container.find('#number2');
    button3 = container.find('#number3')
    button4 = container.find('#number4');
    button5 = container.find('#number5');
    button7 = container.find('#number7');
    plus = container.find('#operator-add');
    subtract = container.find('#operator-subtract');
    multiply = container.find('#operator-multiply');
    divide = container.find('#operator-divide');
    equals = container.find('#operator-equals');
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add two numbers', () => {
    button1.simulate('click');
    plus.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to subtract a number from another', () => {
    button7.simulate('click');
    subtract.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to multiply two numbers', () => {
    button3.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide two numbers', () => {
    button2.simulate('click');
    button1.simulate('click');
    divide.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to concatenate two numbers', () => {
    button4.simulate('click');
    button3.simulate('click');
    expect(runningTotal.text()).toEqual('43');
  })

  it('should be able to chain multiple operators', () => {
    button2.simulate('click');
    multiply.simulate('click');
    button3.simulate('click');
    plus.simulate('click');
    button4.simulate('click');
    subtract.simulate('click');
    button1.simulate('click');
    divide.simulate('click');
    button3.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

})

