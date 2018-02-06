import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class VideoLink extends Component {
  render(props) {
    const { meta } = props;

    return (
      <li className="video">
        <Link
          href={`/${meta.id}/${encodeURIComponent(meta.title)}`}
          className="videolink"
          activeClassName="active"
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
            {meta.tags.map((tag, i) => (
              <a key={`tag${i}`} href={encodeURIComponent(tag)} className="tag">
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
