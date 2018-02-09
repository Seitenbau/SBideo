import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import { PersonIcon } from 'react-octicons';

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
        <div className={style.meta}>
          <div className={style.people}>
            <PersonIcon className={style.icon} />
            {meta.people.join(', ')}
          </div>
          <div className={style.tags}>
            {meta.tags.map((tag, i) => (
              <a
                key={`tag${i}`}
                href={encodeURIComponent(tag)}
                className={style.tag}
              >
                {tag}
              </a>
            ))}
          </div>
          <div className="description">{meta.description}</div>
        </div>
      </li>
    );
  }
}
