import { h, Component } from 'preact';
import style from './style.scss';

export default class VideoPlayer extends Component {
  videoRef = null;

  componentDidUpdate() {
    if (this.props.src && this.props.currentTime) {
      this.videoRef.currentTime = this.props.currentTime;
    }
  }

  render(props) {
    return (
      <div className={props.className}>
        <div className={style.sizer}>
          {props.src ? (
            <video
              ref={videoEl => {
                this.videoRef = videoEl;
              }}
              className={style.video}
              controls
              autoPlay
              src={props.src}
            />
          ) : (
            <div className={style.poster} />
          )}
        </div>
      </div>
    );
  }
}
