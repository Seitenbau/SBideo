import { h, Component } from 'preact';
import style from './style';
import Folder from '../../components/folder';
import VideoContainer from '../../components/videoContainer';
import Search from '../../components/search';

export default class Home extends Component {
  state = {
    data: [],
    searchResultsExist: false
  };

  itemsEndpoint = 'http://localhost:3000/items.json';

  setSearchResultExist(results) {
    this.setState({ searchResultsExist: results.length > 0 });
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
      <div class={style.home}>
        <VideoContainer data={state.data} activeVideoId={this.props.videoId} />
        <Search
          data={state.data}
          getResult={this.setSearchResultExist.bind(this)}
        />
        {!state.searchResultsExist && <Folder data={state.data} />}
      </div>
    );
  }
}
