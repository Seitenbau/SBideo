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

  /** Replace url parameter
   *  https://stackoverflow.com/a/20420424/1312073
   */
  replaceUrlParam(url, paramName, paramValue) {
    if (paramValue == null) {
      paramValue = '';
    }
    var pattern = new RegExp('\\b(' + paramName + '=).*?(&|$)');
    if (url.search(pattern) >= 0) {
      return url.replace(pattern, '$1' + paramValue + '$2');
    }
    url = url.replace(/\?$/, '');
    return (
      url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue
    );
  }

  get shareLink() {
    let link = window.location.href;
    const { currentTimestamp } = this.props.activeVideo;
    if (this.state.shareTimeActive) {
      link = this.replaceUrlParam(link, 't', currentTimestamp);
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
        {this.props.activeVideo.currentTime > 0 && (
          <div className={style.shareTime}>
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
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ activeVideo }) => ({
  activeVideo
});

export default connect(mapStateToProps)(ShareLink);
