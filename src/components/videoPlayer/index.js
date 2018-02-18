import { h, Component } from 'preact';
import style from './style.scss';
import { connect } from 'preact-redux';

export class VideoPlayer extends Component {
  render(props) {
    return (
      <div className={props.className}>
        <div className={style.sizer}>
          {props.activeVideo.src ? (
            <video
              className={style.video}
              controls
              autoPlay
              src={props.activeVideo.src}
            />
          ) : (
            <div className={style.poster} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeVideo: state.home.activeVideo
  };
};

export default connect(mapStateToProps)(VideoPlayer);
