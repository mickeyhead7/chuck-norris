import React from 'react';
import { shallow } from 'enzyme';
import { Jokes } from '../../../Components/Jokes';
import { Joke } from '../../../Components/Joke';

describe('Jokes', () => {
  test('Jokes default', () => {
    const props = {
      error: null,
      jokes: [
        {
          id: 1,
          joke: 'foo'
        },
        {
          id: 2,
          joke: 'bar'
        }
      ],
      fetchJoke: jest.fn(),
      buttonDisabled: false
    };
    const jokes = shallow(<Jokes {...props} />);
    const joke = jokes.find('Joke');

    expect(jokes).toMatchSnapshot();
    expect(joke).toHaveLength(2);
  });
});