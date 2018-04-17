import { h } from 'preact';
import { MetaEditable } from '../index.js';
import { shallow } from 'preact-render-spy';

const testMeta = {
  title: 'bla'
};
const testVideo = {
  meta: testMeta,
  path: ['blubb']
};

const getLatestMeta = () => undefined;

describe('Test that prop is copied to state', () => {
  test('Meta of state should be the equivalent meta from props', () => {
    const context = shallow(
      <MetaEditable getLatestMeta={getLatestMeta} video={testVideo} />
    );
    expect(context.state('meta')).toEqual(testMeta);
  });
});
