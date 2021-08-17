import { createStore, applyMiddleware, compose } from 'redux';

import appReducers from './reducers/appReducers';
import appMiddleware from './middlewares/appMiddleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducers,  composeEnhancers(applyMiddleware(...appMiddleware)));

window.store = store;
export default store;
store.dispatch({ type: 'GET_DATA' });
