import { h, Component } from 'preact';
import style from './style.scss';

export default class VideoPlayer extends Component {
  render(props) {
    return (
      <div className={style.videoPlayer}>
        <div className={style.sizer}>
          <video
            className={style.video}
            controls
            autoPlay
            poster="/assets/FuBK_testcard_vectorized.svg"
            src={props.src ? props.src : ''}
          />
        </div>
      </div>
    );
  }
}
