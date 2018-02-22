import { h, Component } from 'preact';
import style from './style.scss';
import { connect } from 'preact-redux';
import poster from './FuBK_testcard_vectorized.svg';

export class VideoPlayer extends Component {
  render(props) {
    const bgImageStyle = `background-image: url(${poster})`;
    return (
      <div className={props.className}>
        <div className={style.sizer}>
          {props.activeVideo.src ? (
            <video
              className={style.video}
              controls
              autoPlay
              src={props.activeVideo.src}
              style={bgImageStyle}
            />
          ) : (
            <div className={style.poster} style={bgImageStyle} />
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
