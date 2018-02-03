import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Search extends Component {
  state = {
    searchIndex: []
  };

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) {
      return;
    }
    this.createSearchIndex(nextProps);
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
        />
      </form>
    );
  }
}
