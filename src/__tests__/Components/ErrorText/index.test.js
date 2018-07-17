import React from 'react';
import { shallow } from 'enzyme';
import ErrorText from '../../../Components/ErrorText';

describe('ErrorText', () => {
  test('ErrorText default', () => {
    const props = {
      error: 'foo'
    };
    const errorText = shallow(<ErrorText {...props} />);

    expect(errorText).toMatchSnapshot();
    expect(errorText.text()).toEqual(props.error);
  });

  test('ErrorText empty', () => {
    const props = {
      error: null
    };
    const errorText = shallow(<ErrorText {...props} />);

    expect(errorText).toMatchSnapshot();
    expect(errorText.text()).toBe('');
  });
});