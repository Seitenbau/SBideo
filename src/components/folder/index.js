import { h, Component } from 'preact';
import VideoLink from '../videoLink';
import style from './style.scss';

export default class Folder extends Component {
  render(props) {
    const { data, activeVideoId } = props;

    // render multiple folders
    if (Array.isArray(data)) {
      const items = data.map((singleFolder, i) => (
        <Folder
          key={`folder${i}`}
          data={singleFolder}
          activeVideoId={activeVideoId}
        />
      ));
      return <ul>{items}</ul>;
    }

    // get out if no data
    if (!data || Object.keys(data).length === 0) {
      return null;
    }

    if (data.type === 'video') {
      return <VideoLink activeVideoId={activeVideoId} meta={data.meta} />;
    } else {
      return (
        <li className={style.parent}>
          <span className={style.title}>{data.meta && data.meta.title}</span>
          {data.items && (
            <Folder data={data.items} activeVideoId={activeVideoId} />
          )}
        </li>
      );
    }
  }
}
