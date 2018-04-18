import { h } from 'preact';
import { MetaEditable } from '../index.js';
import { shallow } from 'preact-render-spy';

// first video test data
const testMeta = {
  title: 'title'
};
const testVideo = {
  meta: testMeta
};

// second video test data
const testMeta2 = {
  title: 'new title'
};
const testVideo2 = {
  meta: testMeta2
};

const getLatestMeta = () => undefined;

describe('Test that meta data is copied from props to state', () => {
  const context = shallow(
    <MetaEditable getLatestMeta={getLatestMeta} video={testVideo} />
  );
  test('State should match the props', () => {
    expect(context.state('meta')).toEqual(testMeta);
  });
  test('State should update when props change', () => {
    context.render(
      <MetaEditable getLatestMeta={getLatestMeta} video={testVideo2} />
    );
    expect(context.state('meta')).toEqual(testMeta2);
  });
});
