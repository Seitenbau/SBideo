import { h, Component } from 'preact';
import VideoPlayer from '../../components/videoPlayer';
import ActiveMetaContainer from '../../components/activeMetaContainer';
import PropTypes from 'prop-types';
import style from './style.scss';

export default class VideoContainer extends Component {
  state = {
    src: '',
    meta: {},
    people: [],
    tags: []
  };

  propTypes = {
    activeVideoId: PropTypes.number,
    data: PropTypes.object,
    editMode: PropTypes.bool
  };

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

  getListOfArrayKey(key, item) {
    if (Array.isArray(item)) {
      return item.map(singleItem => this.getListOfArrayKey(key, singleItem));
    }

    if (item.items && item.items.length > 0) {
      item.items.map(singleItem => this.getListOfArrayKey(key, singleItem));
    }

    if (item.meta && item.meta[key]) {
      item.meta[key].map(thing => {
        // TODO check if this really works
        if (!this.state[key][thing]) {
          const things = this.state[key];
          const id = this.state[key].length + 1;

          things.push({ id: id, name: thing });

          // TODO calling setState very often might be a performance issue
          this.setState({
            [key]: things
          });
        }
      });
    }
  }

  uniqueArray(a) {
    return a.filter(function(item, pos) {
      return a.indexOf(item) == pos;
    });
  }

  componentWillReceiveProps(nextProps) {
    const shouldScroll = this.props.activeVideoId !== nextProps.activeVideoId;
    const { activeVideoId, data } = nextProps;

    const video =
      activeVideoId && activeVideoId.length > 0
        ? this.getVideoById(data, activeVideoId)
        : null;

    this.getListOfArrayKey('people', data);
    this.getListOfArrayKey('tags', data);

    if (video) {
      this.setState({ ...video });
      if (shouldScroll) {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      }
    }
  }

  render() {
    return (
      <div className={style.wrapper}>
        <VideoPlayer className={style.videoPlayer} src={this.state.src} />
        <ActiveMetaContainer
          className={style.activeMetaContainer}
          meta={this.state.meta}
          editMode={this.props.editMode}
          peopleList={this.state.people}
          tagsList={this.state.tags}
        />
      </div>
    );
  }
}
