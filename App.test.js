import 'jsdom-global/register'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render, renderer } from 'enzyme';
import React from 'react';
import { Button } from 'react-native';
import App from './App';

/*
it('renders without crashing', () => {
  const rendered = renderer(<App />);
  expect(rendered).toBeTruthy();
});
*/

const wrapper = mount(<App />);

it('should render button', () => {
  expect(wrapper.find('#button').length).toBe(1);
});

it('should change the text', () => {
  const changeButton = wrapper.find('#change');
  const text = wrapper.find('#text').first().render().text();

  expect(text).toBe("Change me");
  //console.warn(wrapper.state().textValue);
  expect(wrapper.state().textValue).toBe("Change me");

  changeButton.props().onPress();
  wrapper.setState({});

  const newtext = wrapper.find('#text').first().render().text();
  console.warn(wrapper.state().textValue);
  //expect(wrapper.state().textValue).toBe("You've changed");
  expect(newtext).toBe("You've changed");
})