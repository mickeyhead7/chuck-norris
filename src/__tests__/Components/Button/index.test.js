import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from '../../../Components/Button';

describe('Button', () => {
  test('Button default', () => {
    const buttonClicked = jest.fn();
    const props = {
      disabled: false,
      onClick: buttonClicked
    };
    const button = shallow(<Button {...props} />);
    
    expect(button).toMatchSnapshot();
    expect(button.props().disabled).toBeFalsy();
    
    button.simulate('click');
    
    expect(buttonClicked).toHaveBeenCalledTimes(1);
  });

  test('Button disabled', () => {
    const buttonClicked = jest.fn();
    const props = {
      disabled: true,
      onClick: buttonClicked
    };
    const button = mount(<Button {...props} />);
    
    expect(button).toMatchSnapshot();
    expect(button.props().disabled).toBeTruthy();
    
    button.simulate('click');
    
    expect(buttonClicked).toHaveBeenCalledTimes(0);
  });
});