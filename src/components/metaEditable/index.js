import { h, Component } from 'preact';
import style from './style.scss';
import metaStyle from '../meta/style.scss'; // TODO is this good or is there any other solution?
import PropTypes from 'prop-types';
import Octicon from '../../components/octicon';
import { route } from 'preact-router';
import TagsEditable from '../tagsEditable';
import InlineEditor from '../inlineEditor';

export default class MetaEditable extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      peopleSuggestions: [],
      tagsSuggestions: [],
      meta: { ...props.meta }
    };
  }

  propTypes = {
    meta: PropTypes.object,
    data: PropTypes.object,
    onSave: PropTypes.func
  };

  getListOfArrayKey(key, item) {
    if (Array.isArray(item)) {
      return this.mergeArray(
        item.map(singleItem => this.getListOfArrayKey(key, singleItem))
      );
    }

    let itemsResult = [];
    if (item.items && item.items.length > 0) {
      itemsResult = this.mergeArray(
        item.items.map(singleItem => this.getListOfArrayKey(key, singleItem))
      );
    }

    if (item.meta && item.meta[key]) {
      itemsResult = this.mergeArray([itemsResult, item.meta[key]]);
    }

    return itemsResult;
  }

  mergeArray(arr) {
    return [].concat(...arr);
    //return Array.from(new Set([].concat(...arr))); // merge & unique
  }

  uniqueArray(a) {
    return Array.from(new Set(a));
  }

  componentWillMount() {
    // TODO call this on componentWillReceiveProps?
    // TODO combine these two iterations, so both keys will be returned without iterating twice
    const peopleSuggestions = this.uniqueArray(
      this.getListOfArrayKey('people', this.props.data)
    );
    const tagsSuggestions = this.uniqueArray(
      this.getListOfArrayKey('tags', this.props.data)
    );
    this.setState({ peopleSuggestions, tagsSuggestions });
  }

  handleTitleChange(title) {
    this.setState(prevState => {
      const meta = prevState.meta;
      meta.title = title;
      return { meta };
    });
  }

  handlePeopleChange(people) {
    this.setState(prevState => {
      const meta = prevState.meta;
      meta.people = people;
      return { meta };
    });
  }

  handleTagsChange(tags) {
    this.setState(prevState => {
      const meta = prevState.meta;
      meta.tags = tags;
      return { meta };
    });
  }

  handleDescriptionChange(description) {
    this.setState(prevState => {
      const meta = prevState.meta;
      meta.description = description;
      return { meta };
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('edit', this.state.meta);
    this.props.onSave(this.state.meta);
    // TODO
    route(`/${this.props.meta.id}/${this.props.meta.slug}`);
  }

  render(props, state) {
    return (
      <div className={style.meta}>
        <form onSubmit={this.handleSubmit}>
          <InlineEditor
            className={style.title}
            value={state.meta.title}
            placeholder="Enter title..."
            onChange={this.handleTitleChange}
          />
          <div className={style.people}>
            <Octicon name="person" className={style.icon} />
            <TagsEditable
              tags={state.meta.people}
              suggestions={state.peopleSuggestions}
              placeholder="Add person"
              onChange={this.handlePeopleChange}
            />
          </div>
          <div className={style.tags}>
            <TagsEditable
              tags={state.meta.tags}
              suggestions={state.tagsSuggestions}
              placeholder="Add tag"
              onChange={this.handleTagsChange}
            />
          </div>
          <div className={`${metaStyle.description} ${style.description}`}>
            <InlineEditor
              className={style.description}
              value={state.meta.description}
              placeholder="Enter description..."
              onChange={this.handleDescriptionChange}
            />
          </div>
          <button type="submit" className={style.saveButton}>
            save
          </button>
        </form>
      </div>
    );
  }
}
