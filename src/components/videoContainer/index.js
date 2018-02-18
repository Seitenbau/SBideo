import { h, Component } from 'preact';
import VideoPlayer from '../../components/videoPlayer';
import ActiveMetaContainer from '../../components/activeMetaContainer';
import PropTypes from 'prop-types';
import style from './style.scss';
import { connect } from 'react-redux';

export class VideoContainer extends Component {
  state = {
    activeVideo: {
      meta: {},
      src: ''
    }
  };

  propTypes = {
    activeVideoId: PropTypes.number,
    data: PropTypes.object,
    editMode: PropTypes.bool,
    setActiveVideo: PropTypes.func
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
    const shouldScroll = this.props.activeVideoId !== nextProps.activeVideoId;

    const { activeVideoId, data } = nextProps;

    const video =
      activeVideoId && activeVideoId.length > 0
        ? this.getVideoById(data, activeVideoId)
        : null;

    console.log('v', video);
    if (video) {
      this.setState({ activeVideo: video });
      if (shouldScroll) {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      }
    }
  }

  render(props, state) {
    console.log(state);
    return (
      <div className={style.wrapper}>
        <VideoPlayer
          className={style.videoPlayer}
          src={state.activeVideo.src}
        />
        <ActiveMetaContainer
          className={style.activeMetaContainer}
          editMode={props.editMode}
          activeVideo={state.activeVideo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.home.data
  };
};

export default connect(mapStateToProps)(VideoContainer);
