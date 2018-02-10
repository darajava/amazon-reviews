// import * as types from '../actions/action-types';

const initialState = {
  orderBy: 'desc',
  groupBy: 'day',
  searchTerm: '',
  stars: [true, true, true, true, true],
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

    case 'UPDATE_STARS':
      // Copy the array because we can't mutate the original
      let stars = state.stars.slice();

      let index = parseInt(action.toggleStar, 10) - 1;
      stars[index] = !stars[index];

      return Object.assign({}, state, {
        stars,
      });

    default:
      return state;
  }
}

export default filterReducer;