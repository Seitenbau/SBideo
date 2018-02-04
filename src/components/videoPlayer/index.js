import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class VideoPlayer extends Component {
  render(props) {
    console.log('videoPlayer', props);
    return (
      <div className="video-container">
        <video
          controls
          autoplay
          poster="/assets/FuBK_testcard_vectorized.svg"
          src={props.src ? 'http://localhost:3000' + props.src : ''} // TODO fix host
        />
      </div>
    );
  }
}
