import React , { Component } from 'react';
import { connect } from 'react-redux';

import Review from '../../views/Review/Review';

import store from '../../../store';

class SearchResults extends Component {

    constructor() {
      super();

      this.state = {
        page: 1,
        finished: false,
        apiResults: [],
      }

      this.fetchReviewPage = this.fetchReviewPage.bind(this);
    }

    componentWillMount() {
      this.fetchReviewPage();
    }

    fetchReviewPage() {
      // Can't explicitly mention the company name hahaha
      let url = this.rot13('uggcf://fryyvpf-sebagraq-grfg.urebxhncc.pbz/erivrjf/' + this.state.page);

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
          console.log(json);
          this.setState({apiResults: json.reviews});
          if (json.hasMore) {
            this.setState({page: this.state.page + 1});
          } else {
            this.setState({finished: true});
          }
        });
    }

    rot13(str) {
      var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
      var index = x => input.indexOf(x);
      var translate = x => index(x) > -1 ? output[index(x)] : x;
      return str.split('').map(translate).join('');
    }

    filterResultSearch(results) {
      let searchTerm = this.props.searchTerm.toUpperCase();

      // if we have no search term dont bother
      if (searchTerm.length === 0) return results;

      return results.filter(review => {
        return review.title.toUpperCase().includes(searchTerm)
          || review.content.toUpperCase().includes(searchTerm);
      });
    }

    filterResultStars(results) {
      return results.filter(review => this.props.stars[review.stars - 1]);
    }

    sortResults(results) {
      return results.sort((a, b) => {
        if (this.props.orderBy === 'asc') {
          return a.reviewCreated > b.reviewCreated ? 1 : -1;
        } else {
          return a.reviewCreated > b.reviewCreated ? -1 : 1;
        }
      });
    }

    render() {
      console.log(this.state);

      // first filter on search term because this is most likely to limit results
      let filteredResults = this.filterResultSearch(this.state.apiResults);
      // then filter on stars
      filteredResults = this.filterResultStars(filteredResults);
      // sort
      filteredResults = this.sortResults(filteredResults);
      // and finally group
      // let groupedResults = this.groupResults(sortedResults);

      return (
        <div>
          {filteredResults.map((review) => {
            return <Review key={review.reviewId} data={review} />
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
