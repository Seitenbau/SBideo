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

    this.state = {
      peopleSuggestions: [],
      tagsSuggestions: [],
      meta: { ...props.meta }
    };
  }

  propTypes = {
    meta: PropTypes.object,
    data: PropTypes.object,
    src: PropTypes.string,
    onSave: PropTypes.func
  };

  getListOfArrayKey(key, item) {
    if (Array.isArray(item)) {
      return this.uniqueArray(
        this.mergeArray(
          item.map(singleItem => this.getListOfArrayKey(key, singleItem))
        )
      );
    }

    let itemsResult = [];
    if (item.items && item.items.length > 0) {
      itemsResult = this.mergeArray(
        item.items.map(singleItem => this.getListOfArrayKey(key, singleItem))
      );
    }

    if (item.meta && item.meta[key]) {
      // check if it's a comma separated string instead of an array, and split it up
      const arr =
        item.meta[key][0] && item.meta[key][0].indexOf(',') > -1
          ? item.meta[key][0].split(',')
          : item.meta[key];

      itemsResult = this.mergeArray([itemsResult, arr]);
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
    const peopleSuggestions = this.getListOfArrayKey('people', this.props.data);
    const tagsSuggestions = this.getListOfArrayKey('tags', this.props.data);
    this.setState({ peopleSuggestions, tagsSuggestions });
  }

  handleTitleChange = title => {
    this.setState(prevState => {
      const meta = prevState.meta;
      meta.title = title;
      return { meta };
    });
  };

  handlePeopleChange = people => {
    this.setState(prevState => {
      const meta = prevState.meta;
      meta.people = people;
      return { meta };
    });
  };

  handleTagsChange = tags => {
    this.setState(prevState => {
      const meta = prevState.meta;
      meta.tags = tags;
      return { meta };
    });
  };

  handleDescriptionChange = description => {
    this.setState(prevState => {
      const meta = prevState.meta;
      meta.description = description;
      return { meta };
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newMeta = this.state.meta;

    console.log('edit', newMeta);
    this.props.onSave(newMeta);

    // async save to server and get new data
    fetch(this.props.src.replace('video.mp4', 'meta.json'), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(newMeta)
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then(json => {
      // TODO replace client state with new server data
      console.log('meta saved, received new data', json);
    }).catch(e => console.log(e));

    // end edit mode
    route(`/${this.props.meta.id}/${this.props.meta.slug}`);
  };

  handleCancel = event => {
    event.preventDefault();
    route('.');
  };

  render(props, state) {
    return (
      <div className={metaStyle.meta}>
        <form onSubmit={this.handleSubmit} className={style.form}>
          <h1>
            <InlineEditor
              value={state.meta.title}
              placeholder="Enter title..."
              onChange={this.handleTitleChange}
              minlength="3"
              maxlength="150"
              required
            />
          </h1>
          <div className={metaStyle.people}>
            <Octicon name="person" className={metaStyle.icon} />
            <TagsEditable
              tags={state.meta.people}
              suggestions={state.peopleSuggestions}
              placeholder="Add person"
              onChange={this.handlePeopleChange}
            />
          </div>
          <div className={metaStyle.tags}>
            <TagsEditable
              tags={state.meta.tags}
              suggestions={state.tagsSuggestions}
              placeholder="Add tag"
              onChange={this.handleTagsChange}
            />
          </div>
          <div className={metaStyle.description}>
            <InlineEditor
              value={state.meta.description}
              placeholder="Enter description..."
              onChange={this.handleDescriptionChange}
              maxlength="1500"
            />
          </div>
          <div className={style.buttonContainer}>
            <button onClick={this.handleCancel}>Cancel</button>
            <button type="submit" className={style.saveButton + ' primary'}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
