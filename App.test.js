import 'jsdom-global/register'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

import React from 'react';
import App from './App';

const wrapper = mount(<App />);

describe('Rendering app', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button tests', () => {

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
  });
});
