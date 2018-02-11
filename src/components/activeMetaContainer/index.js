import { h, Component } from 'preact';
import Meta from '../../components/meta';
import MetaEditable from 'async!../../components/metaEditable';

export default class ActiveMetaContainer extends Component {
  render(props) {
    if (Object.keys(props.meta).length > 0) {
      return (
        <div className={props.className}>
          {props.editMode ? (
            <MetaEditable meta={props.meta} showTitle="true" />
          ) : (
            <Meta meta={props.meta} showTitle="true" />
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
