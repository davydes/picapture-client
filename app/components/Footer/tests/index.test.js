import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

const renderedComponent = (props) => shallow(
  <Footer {...props} />
);

describe('<Footer />', () => {
  it('Expect to have unit tests specified', () => {
    const wrapper = renderedComponent();
    expect(wrapper.find('footer').length).toEqual(1);
  });
});
