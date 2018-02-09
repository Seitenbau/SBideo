import { h, Component } from 'preact';
import * as fuse from 'fuse.js';
import PropTypes from 'prop-types';
import style from './style.scss';

export default class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.search = this.search.bind(this);
  }

  state = {
    searchIndex: [],
    results: []
  };

  propTypes = {
    data: PropTypes.array,
    getResult: PropTypes.func
  };

  searchEngine;

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.createSearchIndex(nextProps);
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
    if (nextProps.data) {
      nextProps.data.map(item => this.walkData(item));

      const searchOptions = {
        keys: ['title', 'description', 'tags', 'people', 'src'],
        threshold: 0.2,
        tokenize: true,
        id: 'id'
      };
      this.searchEngine = new fuse(this.state.searchIndex, searchOptions);
    }
  }

  search(event) {
    const resultIds = this.searchEngine.search(event.target.value);

    function copy(o) {
      return Object.assign({}, o);
    }

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

  render() {
    return (
      <form className={style.searchBar} role="search">
        <input
          type="text"
          autoComplete="false"
          placeholder="Search"
          id="searchField"
          onInput={this.search}
          className={style.searchField}
        />
      </form>
    );
  }
}
