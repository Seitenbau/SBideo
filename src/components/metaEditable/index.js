import { h, Component } from 'preact';
import style from './style.scss';
import PropTypes from 'prop-types';
import Octicon from '../../components/octicon';
import { route } from 'preact-router';
import TagsEditable from '../tagsEditable';

export default class MetaEditable extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = Object.assign({}, props.meta);
  }

  propTypes = {
    meta: PropTypes.object
  };

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handlePeopleChange(people) {
    this.setState({ people });
  }

  handleTagsChange(tags) {
    this.setState({ tags });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('edit', this.state);
    // TODO
    route(`/${this.props.meta.id}/${this.props.meta.slug}`);
  }

  render(props) {
    const { meta } = props;

    const peopleSuggestions = [
      { id: 3, name: 'Tobias Schmidt' },
      { id: 4, name: 'Jakob Schröter' }
    ];
    const tagSuggestions = [
      { id: 3, name: 'Bananas' },
      { id: 4, name: 'Mangos' },
      { id: 5, name: 'Lemons' },
      { id: 6, name: 'Apricots' }
    ];

    return (
      <div className={style.meta}>
        <form onSubmit={this.handleSubmit}>
          <input value={meta.title} onChange={this.handleTitleChange} />
          <div className={style.people}>
            <Octicon name="person" className={style.icon} />
            <TagsEditable
              tags={meta.people}
              suggestions={peopleSuggestions}
              placeholder="Add person"
              onChange={this.handlePeopleChange}
            />
          </div>
          <div className={style.tags}>
            <TagsEditable
              tags={meta.tags}
              suggestions={tagSuggestions}
              placeholder="Add tag"
              onChange={this.handleTagsChange}
            />
          </div>
          <div className="description">
            <textarea
              value={meta.description}
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
