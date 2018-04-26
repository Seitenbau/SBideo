import { h } from 'preact';
import { ShareLink } from '../index.js';
import { shallow } from 'preact-render-spy';

const activeVideoTest = {
  src: 'blib',
  currentTimestamp: '2h21m34s',
  href: 'http://blub.de'
};

describe('Test of the link sharing component', () => {
  test('At least some div should be displayed when component is shown', () => {
    const context = shallow(<ShareLink show activeVideo={activeVideoTest} />);
    expect(context.find('div').length).toBeGreaterThan(0);
  });
  test('Should not display when show is set false', () => {
    const context = shallow(
      <ShareLink show={false} activeVideo={activeVideoTest} />
    );
    expect(context.find('div').length).toBe(0);
  });

  test('Sharelink should be with timestamp when time sharing is on', () => {
    const context = shallow(<ShareLink show activeVideo={activeVideoTest} />);
    context.find('input').simulate('change');
    expect(context.component().shareLink).toContain('2h21m34s');
  });
});
