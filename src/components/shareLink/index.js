import { h, Component } from 'preact';
import style from './style.scss';
import Octicon from '../../components/octicon';
import Copy from 'react-copy';

import PropTypes from 'prop-types';
import { connect } from 'unistore/preact';

export class ShareLink extends Component {
  state = {
    shareTimeActive: false
  };

  static propTypes = {
    activeVideo: PropTypes.object,
    show: PropTypes.bool
  };

  togglePanel = () => {
    this.setState({ sharePanelActive: !this.state.sharePanelActive });
  };

  get shareLink() {
    let link = window.location.href;
    if (this.state.shareTimeActive) {
      link += `?t=${this.props.activeVideo.currentTime}`;
    }

    return link;
  }

  onChangeSharetime = () => {
    this.setState({ shareTimeActive: !this.state.shareTimeActive });
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={style.shareContainer}>
        <Copy
          textToBeCopied={this.shareLink}
          onCopied={this.onCopied}
          className={style.shareText}
        >
          <button className={style.shareButton}>
            <span>
              <Octicon name="link" className={style.icon} /> Copy Link
            </span>
          </button>
        </Copy>
        <input
          onChange={this.onChangeSharetime}
          type="checkbox"
          id="sharetime"
        />
        <label htmlFor="sharetime">
          {' '}
          share at
          <span className="currenttime">
            {' ' + this.props.activeVideo.currentTimestamp}
          </span>
        </label>
      </div>
    );
  }
}

const mapStateToProps = ({ activeVideo }) => ({
  activeVideo
});

export default connect(mapStateToProps)(ShareLink);
