import { h, Component } from 'preact';
import style from './style';
import Folder from '../../components/folder';
import VideoContainer from '../../components/videoContainer';
import MetaContainer from '../../components/metaContainer';
import Search from '../../components/search';

export default class Home extends Component {
  state = {
    data: [],
    searchResults: []
  };

  itemsEndpoint = 'http://localhost:3000/items.json';

  // walkData(item) {
  //   if (item.type === 'video' && item.meta) {
  //     const newIndex = this.state.searchIndex.splice(0);
  //     newIndex.push(item.meta);
  //     this.setState({ searchIndex: newIndex });
  //   }

  //   if (Array.isArray(item)) {
  //     return item.map(singleItem => this.walkData(singleItem));
  //   }

  //   if (item.items && item.items.length > 0) {
  //     return item.items.map(singleItem => this.walkData(singleItem));
  //   }
  // }

  // saveChildrenToParents(nextProps) {
  //   if (nextProps.data) {
  //     nextProps.data.map(item => this.walkData(item));
  //   }
  // }

  getSearchResults(results) {
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
      });
  }

  render(props, state) {
    return (
      <div class={style.home}>
        <VideoContainer />
        <MetaContainer />
        <Search
          data={state.data}
          getResult={this.getSearchResults.bind(this)}
        />
        <Folder
          id="itemList"
          data={state.data}
          searchResults={this.state.searchResults}
        />
      </div>
    );
  }
}
