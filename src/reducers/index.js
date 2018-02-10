import { combineReducers } from 'redux';

// Reducers
import filterReducer from './filterReducer';

// Combine Reducers
var reducers = combineReducers({
    filterState: filterReducer,
});

export default reducers;
