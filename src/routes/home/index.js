import { h, Component } from 'preact';
import style from './style.scss';
import Folder from '../../components/folder';
import VideoContainer from '../../components/videoContainer';
import Search from '../../components/search';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.setSearchResults = this.setSearchResults.bind(this);
  }

  state = {
    data: [],
    searchResults: null
  };

  propTypes = {
    id: PropTypes.number,
    term: PropTypes.string,
    t: PropTypes.string
  };

  itemsEndpoint = '/items.json';

  setSearchResults(results) {
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
        <VideoContainer
          data={state.data}
          activeVideoId={this.props.id}
          className={style.layoutElement}
          startTime={this.props.t}
        />
        <Search
          data={state.data}
          getResults={this.setSearchResults}
          className={style.layoutElement}
          isActive={this.props.id === 'search'}
          term={this.props.id === 'search' ? this.props.term : ''}
        />
        <Folder
          data={state.searchResults != null ? state.searchResults : state.data}
        />
      </div>
    );
  }
}
