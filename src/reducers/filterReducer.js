// import * as types from '../actions/action-types';

const initialState = {
  order: 'desc',
  group: 'day',
  searchTerm: '',
  stars: [1, 2, 3, 4, 5],
}



const filterReducer = function(state = initialState, action) {

  switch(action.type) {

    case 'SEARCH_TERM':
      return Object.assign({}, state, {
        searchTerm: action.searchTerm,
      });

  }

  return state;

}

export default filterReducer;