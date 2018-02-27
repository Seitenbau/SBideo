import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from './routes/home';
import createStore from 'unistore';
import { Provider } from 'unistore/preact';

if (module.hot) {
  require('preact/debug');
}

const initialState = {
  data: [],
  activeVideo: {
    meta: {},
    src: ''
  },
  newData: null,
  editMode: false,
  searchResults: null
};
const store = createStore(initialState);

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    // switch to hash history for routing on github
    const createHashHistory =
      typeof window !== 'undefined' && process.env.PUBLISH_ENV === 'github'
        ? require('history/createHashHistory').default // TODO make sure the history dep isn't included in regular build
        : () => null;

    return (
      <Provider store={store}>
        <div id="app">
          <Router history={createHashHistory()} onChange={this.handleRoute}>
            <Home path="/:id?/:term?/:mode?" />
          </Router>
        </div>
      </Provider>
    );
  }
}
