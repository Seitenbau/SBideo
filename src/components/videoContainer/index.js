import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import VideoPlayer from '../../components/videoPlayer';
import MetaContainer from '../../components/metaContainer';
import style from './style';

export default class VideoContainer extends Component {
  getVideoById(items, videoId) {
    var result;

    const checkMatch = item => {
      if (item.type === 'video' && item.meta && item.meta.id === videoId) {
        result = item;
        return true;
      }
      return Array.isArray(item.items) && item.items.some(checkMatch);
    };

    items.some(checkMatch);
    return result;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.activeVideoId !== nextProps.activeVideoId;
  }

  render(props) {
    console.log('videoContainer props', props);

    const video =
      props.activeVideoId && props.activeVideoId.length > 0
        ? this.getVideoById(props.data, props.activeVideoId)
        : null;

    return (
      <div className="video-grid-wrapper">
        <VideoPlayer src={video ? video.src : null} />
        <MetaContainer meta={video ? video.meta : null} />
      </div>
    );
  }
}
