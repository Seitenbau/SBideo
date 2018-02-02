import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class MetaContainer extends Component {
  render(props) {
    return (
      <div id="activeVideoMeta">
        <h1>Welcome to SBideo!</h1>
        <p>Just search and select a video below.</p>
      </div>
    );
  }
}
