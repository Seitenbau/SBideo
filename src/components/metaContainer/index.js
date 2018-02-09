import { h, Component } from 'preact';
import style from './style.scss';
import { PersonIcon } from 'react-octicons';

export default class MetaContainer extends Component {
  render(props) {
    if (props.meta) {
      return (
        <div className={style.metaContainer}>
          <h1>{props.meta.title}</h1>
          <div className="people">
            <PersonIcon className={style.icon} />
            {props.meta.people.join(', ')}
          </div>
          <div className="tags">
            {props.meta.tags.map((tag, i) => (
              <a key={`tag${i}`} href={encodeURIComponent(tag)} className="tag">
                {tag}
              </a>
            ))}
          </div>
          <div className="description">{props.meta.description}</div>
        </div>
      );
    } else {
      return (
        <div className={style.metaContainer}>
          <h1>Welcome to SBideo!</h1>
          <p>Just search and select a video below.</p>
        </div>
      );
    }
  }
}
