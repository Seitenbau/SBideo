import { h } from 'preact';
import VideoContainer from '../index.js';
import { shallow } from 'preact-render-spy';

describe('Test of the Video Container', () => {

  test('Video Container converts duration strings to correct integer value', () => {
    const context = shallow(<VideoContainer startTime="2h21m34s" />);
    expect(context.state('currentTime')).toEqual(8494);

    context.render(<VideoContainer startTime="2h34s" />);
    expect(context.state('currentTime')).toEqual(7234);

    context.render(<VideoContainer startTime="55m" />);
    expect(context.state('currentTime')).toEqual(3300);

    context.render(<VideoContainer startTime="43s" />);
    expect(context.state('currentTime')).toEqual(43);
  });
});
