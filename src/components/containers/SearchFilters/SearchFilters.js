import React , { Component } from 'react';
import { connect } from 'react-redux';

import InputField from '../../views/InputField/InputField';
import OptionField from '../../views/DropdownField/DropdownField';
import StarField from '../../views/StarField/StarField';

import store from '../../../store';
import {updateSearchTerm} from '../../../actions/filterActions';

class SearchFilters extends Component {

    constructor() {
      super();

      // Ideally we would get these from an API/config file
      this.groupByOptions = ['day', 'week', 'month'];
      this.orderByOptions = ['descending date', 'ascending date'];
    }

    changeSearchTerm(searchTerm) {
      store.dispatch(updateSearchTerm(searchTerm));
    }

    render() {
      return (
        <div>
          <InputField term={this.props.searchTerm} handleChange={(searchTerm) => this.changeSearchTerm(searchTerm)} />
          <div>
            <OptionField selected={this.props.groupBy} options={this.groupByOptions} placeholder="Group by" />
            <OptionField selected={this.props.orderBy} options={this.orderByOptions} placeholder="Order by" />
          </div>
          <StarField selected={this.props.stars}/>
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
