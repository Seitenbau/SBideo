import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import Meta from '../../components/meta';
import MetaEditable from 'async!../../components/metaEditable';
import PropTypes from 'prop-types';
import style from './loader.scss';

export class ActiveMetaContainer extends Component {
  state = {
    editComponentMounted: false
  };
  static propTypes = {
    activeVideo: PropTypes.object,
    editMode: PropTypes.bool
  };

  editComponentMounted = () => {
    this.setState({
      editComponentMounted: true
    });
  };

  render(props, state) {
    const meta = props.activeVideo.meta;
    if (meta && Object.keys(meta).length > 0) {
      return (
        <div className={props.className}>
          {props.editMode ? (
            <div>
              {!state.editComponentMounted && (
                <p className={style.loader}>Loading</p>
              )}
              <MetaEditable
                video={props.activeVideo}
                onSave={this.onSave}
                onMount={this.editComponentMounted}
              />
            </div>
          ) : (
            <Meta video={props.activeVideo} showTitle="true" showPath="true" />
          )}
        </div>
      );
    } else {
      return (
        <div className={props.className}>
          <h1>Welcome to SBideo!</h1>
          <p>Just search and select a video below.</p>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ activeVideo, editMode }) => ({
  activeVideo,
  editMode
});

export default connect(mapStateToProps)(ActiveMetaContainer);
