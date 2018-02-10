import React, { Component } from 'react';
import './App.css';
import SearchFilters from './components/containers/SearchFilters/SearchFilters';
// import SearchResults from './components/containers/SearchResults';

class App extends Component {
  render() {
    return (
      <div>
        <SearchFilters />
      </div>
    );
  }
}

export default App;
