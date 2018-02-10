import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import SearchFilters from './components/containers/SearchFilters/SearchFilters';
// import SearchResults from './components/containers/SearchResults';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SearchFilters />
      </Provider>
    );
  }
}

export default App;
