import { h, Component } from 'preact';
import style from './style';
import * as fuse from 'fuse.js';
import VideoLink from '../../components/videoLink';

export default class Search extends Component {
  state = {
    searchIndex: [],
    results: []
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

    console.log('searchresults', resultIds);

    function copy(o) {
      return Object.assign({}, o)
    }
    
    var results = this.props.data.map(copy).filter(function f(o) {
      if (o.meta && o.meta.id && resultIds.includes(o.meta.id)) return true;
    
      if (o.items) {
        return (o.items = o.items.map(copy).filter(f)).length;
      }
    })

    console.log('filtered data', results);


    if (typeof this.props.getResult === 'function') {
      this.props.getResult(results);
    }

    this.setState({ results: results });
  }

  render(props, state) {
    return (
      <div className="search">
        <form className="searchBar" role="search">
          <input
            type="text"
            autocomplete="false"
            placeholder="Search"
            id="searchField"
            onInput={this.search.bind(this)}
          />
        </form>
        <ul className="searchResults">
          {this.state.results.map(result => <VideoLink meta={result} />)}
        </ul>
      </div>
    );
  }
}
