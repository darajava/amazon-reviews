import React , { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import ReviewGroup from '../../views/ReviewGroup/ReviewGroup';
import Loading from '../../views/Loading/Loading';

import store from '../../../store';

class SearchResults extends Component {

    constructor() {
      super();

      this.state = {
        page: 1,
        loading: true,
        finished: false,
        apiResults: [],
      }

      this.fetchReviewPage = this.fetchReviewPage.bind(this);

      this.checkScroll = () => {
        console.log('scrollin')
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          if (!this.state.loading && !this.state.finished) {
            this.setState({
              loading: true
            });

            this.fetchReviewPage();
          }
        }
      };

      // Set up listener to check if user has scrolled to the bottom
      window.onscroll = this.checkScroll;
    }

    componentWillMount() {
      this.fetchReviewPage();
    }

    componentDidUpdate() {
      // After each render, see if results don't reach bottom of screen, and if they don't then
      // call another page of results. Note that this will call all of the pages if a search
      // term is input that doesn't exist in the search results
      this.checkScroll();
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

          this.setState({
            apiResults: this.state.apiResults.concat(json.reviews),
            loading: false,
          });
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

    groupResults(results) {
      switch (this.props.groupBy) {
        case 'week':
          return _.groupBy(results, (result) => moment(result.reviewCreated).startOf('isoWeek'));
        case 'month':
          return _.groupBy(results, (result) => moment(result.reviewCreated).startOf('month'));
        default:
          return _.groupBy(results, (result) => moment(result.reviewCreated).startOf('day'));
      }
    }

    render() {
      // first filter on search term because this is most likely to limit results
      let filteredResults = this.filterResultSearch(this.state.apiResults);
      // then filter on stars
      filteredResults = this.filterResultStars(filteredResults);
      // sort
      filteredResults = this.sortResults(filteredResults);
      // and finally group
      filteredResults = this.groupResults(filteredResults);

      return (
        <div>
          {
            Object.keys(filteredResults).map((key) => {
              return <ReviewGroup
                reviews={filteredResults[key]}
                startTime={key}
                grouping={this.props.groupBy}
                searchTerm={this.props.searchTerm}
              />
            })
          }

          {this.state.loading && <Loading />}
          {this.state.finished && !!Object.keys(filteredResults).length && <div>End of results</div>}
          {this.state.finished && !Object.keys(filteredResults).length && <div>No results</div>}
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
