import { h } from 'preact';
import { ShareLink } from '../index.js';
import { shallow } from 'preact-render-spy';

const activeVideoTest = {
  src: 'blib',
  currentTimestamp: '2h21m34s',
  href: 'http://blub.de'
};

describe('Test of the link sharing component', () => {
  test('Sharelink should be with timestamp when time sharing is on', () => {
    const context = shallow(<ShareLink show activeVideo={activeVideoTest} />);
    context.find('input').simulate('change');
    expect(context.component().shareLink).toContain('2h21m34s');
  });
});
