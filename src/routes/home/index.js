import { h, Component } from 'preact';
import style from './style.scss';
import Folder from '../../components/folder';
import VideoContainer from '../../components/videoContainer';
import Search from '../../components/search';
import PropTypes from 'prop-types';
import { connect } from 'preact-redux';
import { retrieveData } from './actions';

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
    data: PropTypes.object
  };

  setSearchResults(results) {
    this.setState({ searchResults: results });
  }

  componentDidMount() {
    this.props.retrieveData();
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
    retrieveData: () => dispatch(retrieveData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
