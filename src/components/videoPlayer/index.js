import { h, Component } from 'preact';
import style from './style.scss';
import PropTypes from 'prop-types';

export default class VideoPlayer extends Component {
  propTypes = {
    currentTime: PropTypes.number,
  };

  render(props) {
    return (
      <div className={props.className}>
        <div className={style.sizer}>
          {props.src ? (
            <video
              currentTime={this.props.currentTime}
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
