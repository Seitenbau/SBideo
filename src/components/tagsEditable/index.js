import { h, Component } from 'preact';
import style from './style.scss';
import PropTypes from 'prop-types';
import ReactTags from 'react-tag-autocomplete';

export default class TagsEditable extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleTagDelete = this.handleTagDelete.bind(this);
    this.handleTagAddition = this.handleTagAddition.bind(this);

    this.state = {
      tags: props.tags.map(tag => {
        return { id: null, name: tag };
      })
    };
  }

  propTypes = {
    meta: PropTypes.object
  };

  handleTagDelete(i) {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
  }

  handleTagAddition(tag) {
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags });
  }

  render(props) {
    const classNames = {
      root: style['react-tags'],
      rootFocused: style['is-focused'],
      selected: style['react-tags__selected'],
      selectedTag: style['react-tags__selected-tag'],
      selectedTagName: style['react-tags__selected-tag-name'],
      search: style['react-tags__search'],
      searchInput: style['react-tags__search-input'],
      suggestions: style['react-tags__suggestions'],
      suggestionActive: style['is-active']
    };

    return (
      <ReactTags
        tags={this.state.tags}
        suggestions={props.suggestions}
        allowNew={true}
        autofocus={false}
        handleDelete={this.handleTagDelete}
        handleAddition={this.handleTagAddition}
        classNames={classNames}
        placeholder={props.placeholder}
      />
    );
  }
}
