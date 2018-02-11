import { h, Component } from 'preact';
import Meta from '../../components/meta';

export default class ActiveMetaContainer extends Component {
  render(props) {
    if (Object.keys(props.meta).length > 0) {
      return (
        <div className={props.className}>
          <Meta meta={props.meta} showTitle="true" />
        </div>
      );
    } else {
      return (
        <div className={props.style}>
          <h1>Welcome to SBideo!</h1>
          <p>Just search and select a video below.</p>
        </div>
      );
    }
  }
}
