import { combineReducers } from 'redux';
import employeeReducer from './employees.reducer';



// Combine with other reducers we may add in the future
const appReducers = combineReducers({
  employeeReducer: employeeReducer
});

export default appReducers;
