import { h, Component } from 'preact';
import Meta from '../../components/meta';
import MetaEditable from 'async!../../components/metaEditable';
import PropTypes from 'prop-types';

export default class ActiveMetaContainer extends Component {
  static propTypes = {
    activeVideo: PropTypes.object
  };

  render(props) {
    if (Object.keys(props.activeVideo.meta).length > 0) {
      return (
        <div className={props.className}>
          {props.editMode ? (
            <MetaEditable
              meta={props.activeVideo.meta}
              src={props.activeVideo.src}
              showTitle="true"
              onSave={this.onSave}
            />
          ) : (
            <Meta meta={props.activeVideo.meta} showTitle="true" />
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
