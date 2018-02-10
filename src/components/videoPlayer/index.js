import { h, Component } from 'preact';
import style from './style.scss';

export default class VideoPlayer extends Component {
  render(props) {
    return (
      <div className={style.videoPlayer}>
        <div className={style.sizer}>
          {props.src && (
            <video
              className={style.video}
              controls
              autoPlay
              poster="/assets/FuBK_testcard_vectorized.svg"
              src={props.src}
            />
          )}
          {!props.src && (
            <span className={style.poster}>
              <img src="/assets/FuBK_testcard_vectorized.svg" />
            </span>
          )}
        </div>
      </div>
    );
  }
}
