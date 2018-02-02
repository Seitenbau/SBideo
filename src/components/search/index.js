import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class MetaContainer extends Component {
  render(props, state) {
    console.log('SEARCHINDEX', props.searchIndex);
    return (
       <form className="searchBar" role="search">
        <input type="text" autocomplete="false" placeholder="Search" id="searchField"/>
       </form>
    );
  }
}
