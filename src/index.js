import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// REDUCERS
const defaultFeedback = {
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
};
function feedback(state = defaultFeedback, action) {
  // check for dispatches
  if (action.type === 'SAVE_FEELING') {
    return {
      ...state,
      ...action.payload,
    };
  } else if (action.type === 'SAVE_UNDERSTANDING') {
    return {
      ...state,
      ...action.payload,
    };
  } else if (action.type === 'SAVE_SUPPORT') {
    return {
      ...state,
      ...action.payload,
    };
  } else if (action.type === 'SAVE_COMMENTS') {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
}

// create store instance
const storeInstance = createStore(
  combineReducers({
    feedback,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
