import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import VideoLink from '../videoLink';
import style from './style';

export default class Folder extends Component {
  render(props) {
    const { data, createSearchIndex } = props;


    // render multiple folders
    if (Array.isArray(data)) {
      const items = data.map(singleFolder => <Folder data={singleFolder} createSearchIndex={createSearchIndex} />);
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
      <VideoLink data={data} createSearchIndex={createSearchIndex}/>
    ) : (
      <li class="videoparent">
        <span class="videoparent-title">{data.meta && data.meta.title}</span>
        {data.items && <Folder data={data.items} createSearchIndex={createSearchIndex} />}
      </li>
    );
  }
}
