import { h, Component } from 'preact';
import style from './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'preact-router/match';
import Octicon from '../../components/octicon';
import { route } from 'preact-router';
import TagsEditable from '../tagsEditable';

export default class MetaEditable extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTagDelete = this.handleTagDelete.bind(this);
    this.handleTagAddition = this.handleTagAddition.bind(this);

    this.state = {
      peopleSuggestions: [
        { id: 3, name: 'Tobias Schmidt' },
        { id: 4, name: 'Jakob Schröter' }
      ],
      tagSuggestions: [
        { id: 3, name: 'Bananas' },
        { id: 4, name: 'Mangos' },
        { id: 5, name: 'Lemons' },
        { id: 6, name: 'Apricots' }
      ]
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

  handleSubmit(event) {
    event.preventDefault();

    // TODO
    route(`/${this.props.meta.id}/${this.props.meta.slug}`);
  }

  render(props) {
    const { meta } = props;

    const classNames = {
      selectedTag: style.tag
    };

    return (
      <div className={style.meta}>
        <form onSubmit={this.handleSubmit}>
          <input value={meta.title} />
          <div className={style.people}>
            <Octicon name="person" className={style.icon} />
            <TagsEditable
              tags={meta.people}
              suggestions={this.state.peopleSuggestions}
              placeholder="Add person"
            />
          </div>
          <div className={style.tags}>
            <TagsEditable
              tags={meta.tags}
              suggestions={this.state.tagSuggestions}
              placeholder="Add tag"
            />
          </div>
          <div className="description">
            <textarea value={meta.description} />
          </div>
          <button type="submit" className={style.saveButton}>
            save
          </button>
        </form>
      </div>
    );
  }
}
