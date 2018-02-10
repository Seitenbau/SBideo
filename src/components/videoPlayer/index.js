import { h, Component } from 'preact';
import style from './style.scss';

export default class VideoPlayer extends Component {
  render(props) {
    return (
      <div className={style.videoPlayer}>
        <div className={style.sizer}>
          {props.src ? (
            <video className={style.video} controls autoPlay src={props.src} />
          ) : (
            <div className={style.poster} />
          )}
        </div>
      </div>
    );
  }
}
