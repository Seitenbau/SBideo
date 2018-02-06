import { h, Component } from 'preact';

export default class VideoPlayer extends Component {
  render(props) {
    console.log('videoPlayer', props);
    return (
      <div className="video-container">
        <video
          controls
          autoPlay
          poster="/assets/FuBK_testcard_vectorized.svg"
          src={props.src ? 'http://localhost:3000' + props.src : ''} // TODO fix host
        />
      </div>
    );
  }
}
