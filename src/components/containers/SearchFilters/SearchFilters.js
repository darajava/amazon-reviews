import React , { Component } from 'react';
import { connect } from 'react-redux';

import InputField from '../../views/InputField/InputField';
import DropdownField from '../../views/DropdownField/DropdownField';
import StarField from '../../views/StarField/StarField';

import store from '../../../store';
import {updateSearchTerm, updateGrouping, updateOrdering, updateStars} from '../../../actions/filterActions';

class SearchFilters extends Component {

    constructor() {
      super();

      // Ideally we would get these from an API/config file
      this.groupByOptions = [
        {k: 'Day', v: 'day'},
        {k: 'Week', v: 'week'},
        {k: 'Month', v: 'month'},
      ];
      this.orderByOptions = [
        {k: 'Descending date', v: 'desc'},
        {k: 'Ascending date', v: 'asc'},
      ];
    }

    changeSearchTerm(searchTerm) {
      store.dispatch(updateSearchTerm(searchTerm));
    }
    
    changeOrdering(orderBy) {
      store.dispatch(updateOrdering(orderBy));
    }
    
    changeGrouping(groupBy) {
      store.dispatch(updateGrouping(groupBy));
    }

    changeStars(toggleStar) {
      store.dispatch(updateStars(toggleStar));
    }

    render() {
      console.log(this.props.stars);
      return (
        <div>
          <InputField
            term={this.props.searchTerm}
            handleChange={(searchTerm) => this.changeSearchTerm(searchTerm)}
          />
          <div>
            <DropdownField
              selected={this.props.groupBy}
              options={this.groupByOptions}
              placeholder="Group by"
              handleChange={(groupBy) => this.changeGrouping(groupBy)}
            />
            <DropdownField
              selected={this.props.orderBy}
              options={this.orderByOptions}
              placeholder="Order by"
              handleChange={(orderBy) => this.changeOrdering(orderBy)}
            />
          </div>
          <StarField
            stars={this.props.stars}
            handleChange={(toggleStar) => {this.changeStars(toggleStar)}}
          />
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


export default connect(mapStateToProps)(SearchFilters);
