import { h, Component } from 'preact';
import VideoPlayer from '../../components/videoPlayer';
import ActiveMetaContainer from '../../components/activeMetaContainer';
import PropTypes from 'prop-types';
import style from './style.scss';

export default class VideoContainer extends Component {
  state = {
    src: '',
    meta: {},
    currentTime: 0,
  };

  propTypes = {
    activeVideoId: PropTypes.number,
    data: PropTypes.object,
    startTime: PropTypes.number
  };

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

  componentWillReceiveProps(nextProps) {
    // set (new) video
    const { activeVideoId, data } = nextProps;
    const video =
      activeVideoId && activeVideoId.length > 0
        ? this.getVideoById(data, activeVideoId)
        : null;

    if (video) {
      this.setState({ ...video });

      // check if we should scroll
      const shouldScroll = this.props.activeVideoId !== nextProps.activeVideoId;
      if (shouldScroll) {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      }
    }

    // we set the current time as well
    this.setCurrentTime(nextProps.startTime);
  }

  componentDidMount() {
    this.setCurrentTime(this.props.startTime);
  }

  /**
   * Converts for example 1m4s to 64
   *
   * @param {string} duration in youtube time format
   *
   * @return {integer} duration in seconds
   */
  setCurrentTime(startTime) {
    if(!startTime) {
      return 0;
    }

    const match = startTime.match(/(\d+h)?(\d+m)?(\d+s)?/i);

    const matches = match.slice(1).map(function(x) {
      if (x != null) {
        return x.replace(/\D/, '');
      }
    });

    const hours = parseInt(matches[0]) || 0;
    const minutes = parseInt(matches[1]) || 0;
    const seconds = parseInt(matches[2]) || 0;

    const currentTime = hours * 3600 + minutes * 60 + seconds;
    this.setState({currentTime});
  }

  render(props, state) {

    return (
      <div className={style.wrapper}>
        <VideoPlayer
          className={style.videoPlayer}
          currentTime={state.currentTime}
          src={state.src}
        />
        <ActiveMetaContainer
          className={style.activeMetaContainer}
          meta={state.meta}
        />
      </div>
    );
  }
}
