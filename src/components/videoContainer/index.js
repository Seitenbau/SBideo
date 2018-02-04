import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import VideoPlayer from '../../components/videoPlayer';
import MetaContainer from '../../components/metaContainer';
import style from './style';

export default class VideoContainer extends Component {
  getVideoById(items, videoId) {
    if (!videoId || videoId.length === 0) {
      return null;
    }

    for (var item of items) {
      if (item.type === 'video' && item.meta && item.meta.id === videoId) {
        return item;
      } else if (item.items) {
        return this.getVideoById(item.items, videoId);
      }
    }

    return null;
  }

  render(props) {
    console.log('videoContainer props', props);

    const video = this.getVideoById(props.data, props.activeVideoId);

    return (
      <div className="video-grid-wrapper">
        <VideoPlayer src={video ? video.src : null} />
        <MetaContainer meta={video ? video.meta : null} />
      </div>
    );
  }
}
