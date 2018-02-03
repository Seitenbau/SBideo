import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
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
    if (
      !data ||
      (Object.keys(data).length === 0 && data.constructor === Object)
    ) {
      return null;
    }

    return data.type === 'video' ? (
      <VideoLink data={data} />
    ) : (
      <li class="videoparent">
        <span class="videoparent-title">{data.meta && data.meta.title}</span>
        {data.items && <Folder data={data.items} />}
      </li>
    );
  }
}
