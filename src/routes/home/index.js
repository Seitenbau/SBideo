import { h, Component } from 'preact';
import style from './style.scss';
import Folder from '../../components/folder';
import VideoContainer from '../../components/videoContainer';
import Search from '../../components/search';
import PropTypes from 'prop-types';
import { connect } from 'preact-redux';
import { retrieveData, setActiveVideo, announceEditMode } from './actions';
import crawl from 'tree-crawl';

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
    announceEditMode: PropTypes.func,
    data: PropTypes.object
  };

  setSearchResults(results) {
    this.setState({ searchResults: results });
  }

  componentDidMount() {
    this.props.retrieveData();
  }

  getVideoById(tree, videoId) {
    let result;
    crawl(
      tree,
      (node, context) => {
        if (node.type === 'video' && node.meta && node.meta.id === videoId) {
          result = node;
          context.break();
        }
      },
      { getChildren: node => node.items }
    );
    return result;
  }

  componentWillReceiveProps(nextProps) {
    const { id, data } = nextProps;

    const video = id && id.length > 0 ? this.getVideoById(data, id) : null;

    if (video) {
      nextProps.setActiveVideo(video);
    }

    nextProps.announceEditMode(nextProps.mode === 'edit');
  }

  render(props, state) {
    return (
      <div className={style.home}>
        <VideoContainer className={style.layoutElement} />
        <Search
          data={props.data.items}
          getResults={this.setSearchResults}
          className={style.layoutElement}
          isActive={this.props.id === 'search'}
          term={this.props.id === 'search' ? this.props.term : ''}
        />
        <Folder
          data={
            state.searchResults != null ? state.searchResults : props.data.items
          }
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
    setActiveVideo: video => dispatch(setActiveVideo(video)),
    announceEditMode: editing => dispatch(announceEditMode(editing))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
