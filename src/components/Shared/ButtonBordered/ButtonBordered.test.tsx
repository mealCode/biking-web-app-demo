import React from 'react';
import { shallow } from 'enzyme';

import ButtonBordered from '.';

describe('ButtonBordered Component', () => {
  it('should render without errors', () => {
    const component = shallow(<ButtonBordered onSubmit={() => {}}>Save</ButtonBordered>);
    const wrapper = component.find('ButtonBordered');
    expect(wrapper.length).toBe(1);
  });
});
