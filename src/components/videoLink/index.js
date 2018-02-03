import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class VideoLink extends Component {
  state = {
    visible: true
  };

  toggleVisibility(visible = true) {
    if (typeof this.props.toggleVisibility === 'function') {
      this.props.toggleVisibility(visible);
    }
    this.setState({ visible: visible });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchResults === nextProps.searchResults) {
      return;
    }
    const { data, searchResults } = nextProps;

    const isSearchMatch = searchResults.indexOf(data.meta.id) > -1;
    this.toggleVisibility(isSearchMatch);
  }

  render(props) {
    const { data, searchResults } = props;

    const rTags = data.meta.tags.map(tag => (
      <a href={encodeURIComponent(tag)} className="tag">
        {tag}
      </a>
    ));

    return (
      <li
        id={data.meta.slug}
        className={this.state.visible ? 'video' : 'video hidden'}
      >
        <a
          href={encodeURIComponent(data.meta.slug)}
          className="videolink"
          data-video={data.src}
        >
          {data.meta.title}
        </a>
        <div className="meta">
          <div className="people">
            <img
              className="icon"
              src="/octicons/build/svg/person.svg"
              alt="person"
              role="presentation"
            />
            {data.meta.people.join(', ')}
          </div>
          <div className="tags">
            {data.meta.tags.map(tag => (
              <a href={encodeURIComponent(tag)} className="tag">
                {tag}
              </a>
            ))}
          </div>
        </div>
        <div className="description">{data.meta.description}</div>
      </li>
    );
  }
}
