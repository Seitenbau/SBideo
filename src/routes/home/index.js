import { h, Component } from 'preact';
import style from './style.scss';
import Folder from '../../components/folder';
import VideoContainer from '../../components/videoContainer';
import Search from '../../components/search';
import PropTypes from 'prop-types';
import { connect } from 'preact-redux';
import { retrieveData, setActiveVideo } from './actions';

export class Home extends Component {
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
    mode: PropTypes.bool,
    retrieveData: PropTypes.func,
    setActiveVideo: PropTypes.func,
    data: PropTypes.object
  };

  setSearchResults(results) {
    this.setState({ searchResults: results });
  }

  componentDidMount() {
    this.props.retrieveData();
  }

  getVideoById(items, videoId) {
    var result;

    const checkMatch = item => {
      if (item.type === 'video' && item.meta && item.meta.id === videoId) {
        result = item;
        return true;
      }
      return Array.isArray(item.items) && item.items.some(checkMatch);
    };

    items.some(checkMatch);
    return result;
  }

  componentWillReceiveProps(nextProps) {
    const { id, data } = nextProps;

    const video = id && id.length > 0 ? this.getVideoById(data, id) : null;

    if (video) {
      // this.setState({ activeVideo: video });
      nextProps.setActiveVideo(video);
    }
  }

  render(props, state) {
    return (
      <div className={style.home}>
        <VideoContainer
          activeVideoId={this.props.id}
          className={style.layoutElement}
          editMode={this.props.mode === 'edit' ? true : false}
        />
        <Search
          data={props.data}
          getResults={this.setSearchResults}
          className={style.layoutElement}
          isActive={this.props.id === 'search'}
          term={this.props.id === 'search' ? this.props.term : ''}
        />
        <Folder
          data={state.searchResults != null ? state.searchResults : props.data}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.home.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveData: () => dispatch(retrieveData()),
    setActiveVideo: video => dispatch(setActiveVideo(video))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
