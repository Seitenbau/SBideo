import { h } from 'preact';
import TagsEditable from '../index.js';
import { shallow } from 'preact-render-spy';

const testTags1 = ['a', 'b', 'c'];
const testTags2 = ['a', 'd', 'c', 'f'];

const testSuggestions1 = ['suggestion', 12341, 'other suggestion'];
const testSuggestions2 = ['more ', 'more', 'test'];

describe('Test that data is copied from props to state', () => {
  const context = shallow(
    <TagsEditable
      classNames={{ selectedTag: 'a' }}
      suggestions={testSuggestions1}
      tags={testTags1}
    />
  );
  test('State should match the props', () => {
    expect(context.state('tags').map(tag => tag.name)).toEqual(testTags1);
  });
  test('State should update when props change', () => {
    context.render(
      <TagsEditable
        classNames={{ selectedTag: 'a' }}
        suggestions={testSuggestions2}
        tags={testTags2}
      />
    );
    expect(context.state('tags').map(tag => tag.name)).toEqual(testTags2);
  });
});
