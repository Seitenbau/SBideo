import { h } from 'preact';
import { VideoPlayer } from '../index.js';
import { shallow } from 'preact-render-spy';

const activeVideoTest = { src: 'blib', startTimestamp: '2h21m34s' };

describe('Test of the Videoplayer', () => {
  test('Videoplayer converts duration strings to correct integer value', () => {
    const context = shallow(<VideoPlayer activeVideo={activeVideoTest} />);
    expect(context.component().startTime).toEqual(8494);

    activeVideoTest.startTimestamp = '2h34s';
    context.render(<VideoPlayer activeVideo={activeVideoTest} />);
    expect(context.component().startTime).toEqual(7234);

    activeVideoTest.startTimestamp = '55m';
    context.render(<VideoPlayer activeVideo={activeVideoTest} />);
    expect(context.component().startTime).toEqual(3300);

    activeVideoTest.startTimestamp = '43s';
    context.render(<VideoPlayer activeVideo={activeVideoTest} />);
    expect(context.component().startTime).toEqual(43);
  });
});
