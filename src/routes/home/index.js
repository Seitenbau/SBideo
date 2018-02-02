import { h, Component } from 'preact';
import style from './style';
import Folder from '../../components/folder';

export default class Home extends Component {

  state = {
    data : {}
  }

  itemsEndpoint = 'http://localhost:3000/items.json';

  componentDidMount() {
    fetch(this.itemsEndpoint)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        this.setState({data: json});
      });
  }

  render(props, state) {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home compone bababwakant.</p>
        <Folder data={state.data}/>
      </div>
    );
  }
}

