import { h, Component } from 'preact';
import VideoPlayer from '../../components/videoPlayer';
import ActiveMetaContainer from '../../components/activeMetaContainer';
import PropTypes from 'prop-types';
import style from './style.scss';
import { connect } from 'unistore/preact';

export class VideoContainer extends Component {
  propTypes = {
    activeVideo: PropTypes.object,
    startTime: PropTypes.string
  };

  componentWillReceiveProps(nextProps) {
    const shouldScroll =
      this.props.activeVideo.meta.id !== nextProps.activeVideo.meta.id;

    if (shouldScroll) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    // we set the current time as well
    this.setCurrentTime(nextProps.startTime);
  }

  componentDidMount() {
    this.setCurrentTime(this.props.startTime);
  }

  /**
   * Sets the current time for a video, in this case the start time
   * It takes a time string like "1m21s" and converts it to an integer, e.g. 81
   *
   * @param {string} startTime in youtube time format, e.g. 14m44s
   */
  setCurrentTime(startTime) {
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
    this.setState({ currentTime });
  }

  render(props, state) {
    return (
      <div className={style.wrapper}>
        <VideoPlayer
          className={style.videoPlayer}
          currentTime={state.currentTime}
        />
        <ActiveMetaContainer className={style.activeMetaContainer} />
      </div>
    );
  }
}

const mapStateToProps = ({ activeVideo }) => ({ activeVideo });

export default connect(mapStateToProps)(VideoContainer);
