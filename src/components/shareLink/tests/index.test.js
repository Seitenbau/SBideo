import { h } from 'preact';
import { ShareLink } from '../index.js';
import { shallow } from 'preact-render-spy';

const activeVideoTest = { src: 'blib', startTimestamp: '2h21m34s' };

describe('Test of the link sharing component', () => {
  test('At least some div should be displayed when component is shown', () => {
    const context = shallow(
      <ShareLink show="true" activeVideo={activeVideoTest} />
    );
    expect(context.find('div').length).toBeGreaterThan(0);
  });
  test('Should not display when show is set false', () => {
    const context = shallow(
      <ShareLink show={false} activeVideo={activeVideoTest} />
    );
    expect(context.find('div').length).toBe(0);
  });
});
