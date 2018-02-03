import { h, Component } from 'preact';
import VideoLink from '../videoLink';
import style from './style';

export default class Folder extends Component {
  render(props) {
    const { data } = props;

    // render multiple folders
    if (Array.isArray(data)) {
      const items = data.map(singleFolder => <Folder data={singleFolder} />);
      return <ul>{items}</ul>;
    }

    // get out if no data
    if (!data || Object.keys(data).length === 0) {
      return null;
    }

    if (data.type === 'video') {
      return <VideoLink meta={data.meta} />;
    } else {
      return (
        <li className="videoparent">
          <span className="videoparent-title">
            {data.meta && data.meta.title}
          </span>
          {data.items && <Folder data={data.items} />}
        </li>
      );
    }
  }
}
