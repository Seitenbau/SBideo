import { h } from 'preact';
import { VideoContainer } from '../index.js';
import { shallow } from 'preact-render-spy';
jest.mock('../../../components/activeMetaContainer', () => <div />);

const activeVideoTest = { meta: { id: 'bla' } };

describe('Test of the Video Container', () => {
  test('Video Container converts duration strings to correct integer value', () => {
    const context = shallow(
      <VideoContainer activeVideo={activeVideoTest} startTime="2h21m34s" />
    );
    expect(context.state('currentTime')).toEqual(8494);

    context.render(
      <VideoContainer activeVideo={activeVideoTest} startTime="2h34s" />
    );
    expect(context.state('currentTime')).toEqual(7234);

    context.render(
      <VideoContainer activeVideo={activeVideoTest} startTime="55m" />
    );
    expect(context.state('currentTime')).toEqual(3300);

    context.render(
      <VideoContainer activeVideo={activeVideoTest} startTime="43s" />
    );
    expect(context.state('currentTime')).toEqual(43);
  });
});
