import React from 'react';
import { shallow } from 'enzyme';
import { Nav, Navbar } from 'react-bootstrap';

import NavBar from '../index';
import Logo from '../Logo';

const renderedComponent = (props = {}) => shallow(
  <NavBar {...props} />
);

describe('<NavBar />', () => {
  it('should render Navbar', () => {
    const wrapper = renderedComponent();
    expect(wrapper.find(Navbar).length).toEqual(1);
  });

  it('should render Logo', () => {
    const wrapper = renderedComponent();
    expect(wrapper.find(Logo).length).toEqual(1);
  });

  it('should render 2 Nav', () => {
    const wrapper = renderedComponent();
    expect(wrapper.find(Nav).length).toEqual(2);
  });
});
