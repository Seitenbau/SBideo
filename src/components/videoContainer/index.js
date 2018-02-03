import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class VideoContainer extends Component {
  render(props) {
    return (
      <div className="video-grid-wrapper">
        <div className="video-container">
          <video
            id="sbideo-main"
            controls
            poster="/assets/FuBK_testcard_vectorized.svg"
          />
        </div>
      </div>
    );
  }
}
