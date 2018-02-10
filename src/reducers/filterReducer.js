// import * as types from '../actions/action-types';

const initialState = {
  orderBy: 'desc',
  groupBy: 'day',
  searchTerm: '',
  stars: [1, 2, 3, 4, 5],
}



const filterReducer = function(state = initialState, action) {

  switch(action.type) {

    case 'UPDATE_SEARCH_TERM':
      return Object.assign({}, state, {
        searchTerm: action.searchTerm,
      });
    case 'UPDATE_GROUPING':
      return Object.assign({}, state, {
        groupBy: action.groupBy,
      });
    case 'UPDATE_ORDERING':
      return Object.assign({}, state, {
        orderBy: action.orderBy,
      });

  }

  return state;

}

export default filterReducer;