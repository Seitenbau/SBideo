import { h, Component } from 'preact';
import style from './style.scss';
import PropTypes from 'prop-types';
import ReactTags from 'react-tag-autocomplete';

export default class TagsEditable extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleTagDelete = this.handleTagDelete.bind(this);
    this.handleTagAddition = this.handleTagAddition.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      tags: props.tags.map(tag => {
        return { id: null, name: tag };
      }),
      suggestions: props.suggestions.map(tag => {
        return { id: null, name: tag };
      })
    };
  }

  propTypes = {
    meta: PropTypes.object,
    onChange: PropTypes.func,
    tags: PropTypes.array,
    suggestions: PropTypes.array
  };

  handleTagDelete(i) {
    const { state, props } = this;

    this.setState(
      prevState => {
        const tags = prevState.tags.slice(0);
        tags.splice(i, 1);
        return { tags };
      },
      () => {
        if (typeof props.onChange === 'function') {
          props.onChange(state.tags.map(tag => tag.name));
        }
      }
    );
  }

  handleBlur() {
    const e = new Event('keydown', {
      bubbles: true,
      cancelable: true
    });

    // keyCode is deprecated but key doesn't work yet, so we keep both
    e.keyCode = 13;
    e.key = 'Enter';

    this.ref.input.input.dispatchEvent(e);
  }

  handleTagAddition(tag) {
    const { state, props } = this;

    this.setState(
      prevState => {
        // remove leading or trailing whitespaces
        tag.name = tag.name.trim();

        //TODO: for existing tags, the suggestion object could have the property "disabled=true", see https://www.npmjs.com/package/react-tag-autocomplete#suggestions-optional
        //TODO: prevent duplicates and make all tags lowercase?
        const tags = [].concat(prevState.tags, tag);
        return { tags };
      },
      () => {
        if (typeof props.onChange === 'function') {
          props.onChange(state.tags.map(tag => tag.name));
        }
      }
    );
  }

  render(props) {
    // TODO nicer style classes
    const classNames = {
      root: style['react-tags'],
      rootFocused: style['is-focused'],
      selected: style['react-tags__selected'],
      selectedTag:
        style['react-tags__selected-tag'] +
        (props.classNames.selectedTag
          ? ' ' + props.classNames.selectedTag
          : ''),
      selectedTagName:
        style['react-tags__selected-tag-name'] +
        (props.classNames.selectedTagName
          ? ' ' + props.classNames.selectedTagName
          : ''),
      search: style['react-tags__search'],
      searchInput: style['react-tags__search-input'],
      suggestions: style['react-tags__suggestions'],
      suggestionActive: style['is-active']
    };

    return (
      <ReactTags
        ref={element => (this.ref = element)}
        tags={this.state.tags}
        suggestions={this.state.suggestions}
        allowNew
        autofocus={false}
        handleBlur={this.handleBlur}
        handleDelete={this.handleTagDelete}
        handleAddition={this.handleTagAddition}
        classNames={classNames}
        placeholder={props.placeholder}
        delimiterChars={[',']}
      />
    );
  }
}
