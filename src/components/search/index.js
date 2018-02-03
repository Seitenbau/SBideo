import { h, Component } from 'preact';
import style from './style';
import * as fuse from 'fuse.js';

export default class Search extends Component {
  state = {
    searchIndex: []
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
      newIndex.push(item.meta);
      this.setState({ searchIndex: newIndex });
    }
  }

  createSearchIndex(nextProps) {
    if (nextProps.data) {
      nextProps.data.map(item => this.walkData(item));

      const searchOptions = {
        keys: ['title', 'description', 'tags', 'people'],
        threshold: 0.2,
        tokenize: true,
        id: 'id'
      };
      this.searchEngine = new fuse(this.state.searchIndex, searchOptions);
    }
  }

  search(event) {
    const results = this.searchEngine.search(event.target.value);

    console.log('searchresults', results);

    if (typeof this.props.getResult === 'function') {
      this.props.getResult(results);
    }
  }

  render(props, state) {
    return (
      <form className="searchBar" role="search">
        <input
          type="text"
          autocomplete="false"
          placeholder="Search"
          id="searchField"
          onInput={this.search.bind(this)}
        />
      </form>
    );
  }
}
