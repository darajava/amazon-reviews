import React , { Component } from 'react';
import { connect } from 'react-redux';

import store from '../../../store';

class SearchResults extends Component {

    constructor() {
      super();

      this.state = {
        page: 1,
        apiResults: [],
        filteredResults: [], // TODO: is this the best way? Can we reuse apiResults?
      }
    }

    componentWillMount() {
      // Can't explicitly mention the company name hahaha
      let url = this.rot13('uggcf://fryyvpf-sebagraq-grfg.urebxhncc.pbz/erivrjf/1');

      // Cross origin is set so we need to proxy the request
      url = 'https://cors.now.sh/' + url;

      let init = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      };

      fetch(url, init)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.setState({apiResults: json.reviews})
        });

      // 

      // fetch(url, init)
      //   .then((res) => res.json())
      //   .catch(error => console.error('Error:', error))
    }

    rot13(str) {
      var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
      var index = x => input.indexOf(x);
      var translate = x => index(x) > -1 ? output[index(x)] : x;
      return str.split('').map(translate).join('');
    }

    render() {
      console.log(this.state)
      return (
        <div>
          {this.state.apiResults.map((review) => {
            return <div>{review.reviewId}</div>
          })}
        </div>
      );
    }
}

const mapStateToProps = function(store) {
  return {
    searchTerm: store.filterState.searchTerm,
    groupBy: store.filterState.groupBy,
    orderBy: store.filterState.orderBy,
    stars: store.filterState.stars,
  };
};


export default connect(mapStateToProps)(SearchResults);
