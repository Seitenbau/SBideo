import { h, Component } from 'preact';
import style from './style.scss';
import { connect } from 'unistore/preact';
import PropTypes from 'prop-types';

export class VideoPlayer extends Component {
  propTypes = {
    currentTime: PropTypes.number
  };

  render(props) {
    const bgImageStyle = `background-image: url(${
      process.env.ASSET_PATH
    }FuBK_testcard_vectorized.svg)`;
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
              currentTime={this.props.currentTime}
            />
          ) : (
            <div className={style.poster} style={bgImageStyle} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ activeVideo }) => ({ activeVideo });

export default connect(mapStateToProps)(VideoPlayer);
