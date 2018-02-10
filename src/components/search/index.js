import { h, Component } from 'preact';
import * as fuse from 'fuse.js';
import PropTypes from 'prop-types';
import style from './style.scss';
import Octicon from '../../components/octicon';
import { route } from 'preact-router';

export default class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.search = this.search.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  state = {
    searchIndex: [],
    results: [],
    searchTerm: ''
  };

  propTypes = {
    data: PropTypes.array,
    getResult: PropTypes.func,
    term: PropTypes.string,
    isActive: PropTypes.bool
  };

  /**
   * Ref to the input element
   */
  searchInput;

  /**
   * Instance of the search engine
   */
  searchEngine;

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.createSearchIndex(nextProps);
    }
    if (this.props.term !== nextProps.term) {
      this.initFirstSearch(nextProps);
    }
  }

  componentDidMount() {
    this.searchInput.focus();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.data !== nextProps.data) {
      return true;
    }
    if (this.props.term !== nextProps.term) {
      return true;
    }
  }

  walkData(item) {
    if (Array.isArray(item)) {
      return item.map(singleItem => this.walkData(singleItem));
    }

    if (item.items && item.items.length > 0) {
      return item.items.map(singleItem => this.walkData(singleItem));
    }

    if (item.type === 'video' && item.meta) {
      const newIndex = this.state.searchIndex.splice(0);
      item.meta.src = item.src;
      newIndex.push(item.meta);
      this.setState({ searchIndex: newIndex });
    }
  }

  createSearchIndex(nextProps) {
    nextProps.data.map(item => this.walkData(item));

    const searchOptions = {
      keys: ['title', 'description', 'tags', 'people', 'src'],
      threshold: 0.2,
      tokenize: true,
      id: 'id'
    };
    this.searchEngine = new fuse(this.state.searchIndex, searchOptions);

    this.initFirstSearch(nextProps);
  }

  /**
   * First search when route is loaded
   * @param {object} nextProps
   */
  initFirstSearch(nextProps) {
    if (this.searchInput && nextProps.term && nextProps.isActive) {
      this.setState({ searchTerm: nextProps.term }, () =>
        this.searchInput.focus()
      );
      this.triggerInputEvent();
    }
  }

  triggerInputEvent() {
    setTimeout(() => {
      const event = new Event('input');
      this.searchInput.dispatchEvent(event);
    }, 1);
  }

  resetSearch(event) {
    if (event) {
      event.preventDefault();
    }
    this.setState({ searchTerm: '' });
    this.triggerInputEvent();
    this.searchInput.focus();
  }

  search(event) {
    this.setState({ searchTerm: event.target.value });

    const resultIds = this.searchEngine.search(event.target.value);

    const copy = o => ({ ...o });

    const results = this.props.data.map(copy).filter(function f(o) {
      if (o.meta && o.meta.id && resultIds.includes(o.meta.id)) {
        return true;
      }

      if (o.items) {
        return (o.items = o.items.map(copy).filter(f)).length;
      }
    });

    if (typeof this.props.getResult === 'function') {
      this.props.getResult(results);
    }

    this.setState({ results: results });
  }

  handleKeyDown(event) {
    // prevent submit when pressing Enter & route to search URL
    if (event.keyCode === 13) {
      event.preventDefault();
      route(`/search/${encodeURIComponent(event.target.value)}`);
    }

    // reset search when pressing ESC
    if (event.keyCode === 27) {
      this.resetSearch();
    }
  }

  render(props, state) {
    return (
      <form className={style.searchForm} role="search">
        <span>
          <input
            ref={input => (this.searchInput = input)}
            type="text"
            autoComplete="off"
            placeholder="Search"
            onInput={this.search}
            onKeyDown={this.handleKeyDown}
            className={style.searchField}
            value={state.searchTerm}
          />
          {this.state.searchTerm && (
            <button onClick={this.resetSearch} className={style.resetButton}>
              <Octicon name="x" className={style.resetIcon} />
            </button>
          )}
        </span>
      </form>
    );
  }
}
