import { h } from 'preact';
import VideoContainer from '../index.js';
import { shallow } from 'preact-render-spy';

describe('Test of the Video Container', () => {

  test('Video Container converts duration strings to correct integer value', () => {
    const context = shallow(<VideoContainer />);
    expect(context.component().durationToSeconds('2h21m34s')).toEqual(8494);
    expect(context.component().durationToSeconds('2h34s')).toEqual(7234);
    expect(context.component().durationToSeconds('43s')).toEqual(43);
  });
});
