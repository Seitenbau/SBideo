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

    this.state = { ...props.meta };
  }

  propTypes = {
    meta: PropTypes.object,
    peopleSuggestions: PropTypes.array,
    tagSuggestions: PropTypes.array,
    onSave: PropTypes.func
  };

  handleTitleChange(title) {
    this.setState({ title });
  }

  handlePeopleChange(people) {
    this.setState({ people });
  }

  handleTagsChange(tags) {
    this.setState({ tags });
  }

  handleDescriptionChange(description) {
    this.setState({ description });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('edit', this.state);
    this.props.onSave(this.state);
    // TODO
    route(`/${this.props.meta.id}/${this.props.meta.slug}`);
  }

  render(props, state) {
    const { peopleSuggestions, tagSuggestions } = props;
    return (
      <div className={style.meta}>
        <form onSubmit={this.handleSubmit}>
          <h1 className={style.title}>
            <InlineEditor
              value={state.title}
              onChange={this.handleTitleChange}
            />
          </h1>
          <div className={style.people}>
            <Octicon name="person" className={style.icon} />
            <TagsEditable
              tags={state.people}
              suggestions={peopleSuggestions}
              placeholder="Add person"
              onChange={this.handlePeopleChange}
            />
          </div>
          <div className={style.tags}>
            <TagsEditable
              tags={state.tags}
              suggestions={tagSuggestions}
              placeholder="Add tag"
              onChange={this.handleTagsChange}
            />
          </div>
          <div className={`${metaStyle.description} ${style.description}`}>
            <InlineEditor
              value={state.description}
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
