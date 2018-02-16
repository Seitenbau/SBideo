import { h, Component } from 'preact';
import style from './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'preact-router/match';
import Octicon from '../../components/octicon';
import ReactAutolink from 'react-autolink';

export default class MetaContainer extends Component {
  propTypes = {
    meta: PropTypes.object
  };

  render(props) {
    const { meta, showTitle } = props;
    return (
      <div className={style.meta}>
        {showTitle && <h1>{meta.title}</h1>}
        <div className={style.people}>
          {meta.people.length > 0 && (
            <Octicon name="person" className={style.icon} />
          )}
          {meta.people.map((person, j) => (
            <span key={`person${j}`}>
              <Link href={`/search/${encodeURIComponent(person)}`}>
                {person}
              </Link>
              {meta.people.length === j + 1 ? '' : ', '}
            </span>
          ))}
        </div>
        <div className={style.tags}>
          {meta.tags.map((tag, i) => (
            <Link
              key={`tag${i}`}
              href={`/search/${encodeURIComponent(tag)}`}
              className={style.tag}
            >
              {tag}
            </Link>
          ))}
        </div>
        <div className={style.description}>
          {ReactAutolink.autolink(meta.description)}
        </div>
      </div>
    );
  }
}
