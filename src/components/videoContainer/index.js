import { h, Component } from 'preact';
import VideoPlayer from '../../components/videoPlayer';
import ActiveMetaContainer from '../../components/activeMetaContainer';
import PropTypes from 'prop-types';
import style from './style.scss';
import { connect } from 'preact-redux';

export class VideoContainer extends Component {
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

  render(props) {
    return (
      <div className={style.wrapper}>
        <VideoPlayer className={style.videoPlayer} />
        <ActiveMetaContainer
          className={style.activeMetaContainer}
          editMode={props.editMode}
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
