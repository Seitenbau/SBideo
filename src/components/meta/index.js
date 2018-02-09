import { h, Component } from 'preact';
import style from './style.scss';
import PropTypes from 'prop-types';

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
          <img
            className={style.icon}
            src="/octicons/build/svg/person.svg"
            alt="person"
            role="presentation"
          />

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
    );
  }
}
