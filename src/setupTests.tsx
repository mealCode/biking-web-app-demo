import React from 'react';
import '@testing-library/jest-dom';
import enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

enzyme.configure({ adapter: new Adapter() });

mount(<div />);
