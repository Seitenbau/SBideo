import { h, Component } from 'preact';

export default class MetaContainer extends Component {
  render(props) {
    console.log('metaContainer', props);

    if (props.meta) {
      return (
        <div className="activeVideoMeta">
          <h1>{props.meta.title}</h1>
          <div className="people">
            <img
              className="icon"
              src="/octicons/build/svg/person.svg"
              alt="person"
              role="presentation"
            />
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
        <div className="activeVideoMeta">
          <h1>Welcome to SBideo!</h1>
          <p>Just search and select a video below.</p>
        </div>
      );
    }
  }
}
