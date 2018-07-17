import React from 'react';
import { shallow } from 'enzyme';
import Joke from '../../../Components/Joke';

describe('Joke', () => {
  test('Joke default', () => {
    const props = {
      id: 1,
      joke: 'foo'
    };
    const joke = shallow(<Joke {...props} />);

    expect(joke).toMatchSnapshot();
    expect(joke.props().id).toEqual(props.id);
    expect(joke.text()).toEqual(props.joke);
  });
});