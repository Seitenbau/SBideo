import { h, Component } from 'preact';
import style from './style';
import Folder from '../../components/folder';
import VideoContainer from '../../components/videoContainer';
import Search from '../../components/search';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.setSearchResultExist = this.setSearchResultExist.bind(this);
  }

  state = {
    data: [],
    searchResults: []
  };

  propTypes = {
    videoId: PropTypes.number
  };

  itemsEndpoint = '/items.json';

  setSearchResultExist(results) {
    this.setState({ searchResults: results });
  }

  componentDidMount() {
    fetch(this.itemsEndpoint)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        this.setState({ data: json });
      })
      .catch(e => console.log(e));
  }

  render(props, state) {
    return (
      <div className={style.home}>
        <VideoContainer data={state.data} activeVideoId={this.props.videoId} />
        <Search data={state.data} getResult={this.setSearchResultExist} />
        <Folder
          data={state.searchResults.length ? state.searchResults : state.data}
          className={style.itemList}
        />
      </div>
    );
  }
}
