import { h, Component } from 'preact';
import VideoLink from '../videoLink';
import style from './style';

export default class Folder extends Component {
  state = {
    visible: false
  };

  toggleVisibility(visible = true) {
    if (typeof this.props.toggleVisibility === 'function') {
      this.props.toggleVisibility(visible);
    }
    this.setState({ visible: visible });
  }

  render(props) {
    const { data } = props;

    // render multiple folders
    if (Array.isArray(data)) {
      const items = data.map(singleFolder => (
        <Folder
          data={singleFolder}
          toggleVisibility={this.toggleVisibility.bind(this)}
          searchResults={this.props.searchResults}
        />
      ));
      return <ul>{items}</ul>;
    }

    // get out if no data
    if (!data || Object.keys(data).length === 0) {
      return null;
    }

    if (data.type === 'video') {
      return (
        <VideoLink
          data={data}
          toggleVisibility={this.toggleVisibility.bind(this)}
          searchResults={this.props.searchResults}
        />
      );
    } else {
      return (
        <li
          className={this.state.visible ? 'videoparent' : 'videoparent hidden'}
        >
          <span className="videoparent-title">
            {data.meta && data.meta.title}
          </span>
          {data.items && (
            <Folder
              data={data.items}
              toggleVisibility={this.toggleVisibility.bind(this)}
              searchResults={this.props.searchResults}
            />
          )}
        </li>
      );
    }
  }
}
