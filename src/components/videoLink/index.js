import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class VideoLink extends Component {
  render(props) {
    const { meta, searchResults } = props;

    const rTags = meta.tags.map(tag => (
      <a href={encodeURIComponent(tag)} className="tag">
        {tag}
      </a>
    ));

    return (
      <li id={meta.slug} className="video">
        <Link
          href={meta.id + '/' + encodeURIComponent(meta.title)}
          className="videolink"
        >
          {meta.title}
        </Link>
        <div className="meta">
          <div className="people">
            <img
              className="icon"
              src="/octicons/build/svg/person.svg"
              alt="person"
              role="presentation"
            />
            {meta.people.join(', ')}
          </div>
          <div className="tags">
            {meta.tags.map(tag => (
              <a href={encodeURIComponent(tag)} className="tag">
                {tag}
              </a>
            ))}
          </div>
        </div>
        <div className="description">{meta.description}</div>
      </li>
    );
  }
}
