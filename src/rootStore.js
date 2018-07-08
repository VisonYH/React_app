import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}  

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, logger),
  reduxDevtools
))

export default store;