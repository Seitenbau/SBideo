import { h, Component } from 'preact';
import VideoPlayer from '../../components/videoPlayer';
import ActiveMetaContainer from '../../components/activeMetaContainer';
import PropTypes from 'prop-types';
import style from './style.scss';

export default class VideoContainer extends Component {
  propTypes = {
    activeVideoId: PropTypes.number,
    data: PropTypes.object,
    editMode: PropTypes.bool
  };

  componentWillReceiveProps(nextProps) {
    const shouldScroll = this.props.activeVideoId !== nextProps.activeVideoId;

    if (shouldScroll) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  }

  render() {
    return (
      <div className={style.wrapper}>
        <VideoPlayer className={style.videoPlayer} />
        <ActiveMetaContainer className={style.activeMetaContainer} />
      </div>
    );
  }
}
