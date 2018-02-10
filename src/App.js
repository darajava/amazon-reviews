import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import SearchFilters from './components/containers/SearchFilters/SearchFilters';
import SearchResults from './components/containers/SearchResults/SearchResults';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* I would usually use a mainlayout file here but it would be overkill for this exercise */}
        <div>
          <SearchFilters />
          <SearchResults />
        </div>
      </Provider>
    );
  }
}

export default App;
