// src/store/reducers.js
import { combineReducers } from 'redux';
// Import your reducers here
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  // Add your reducers here
  data: dataReducer,
});

export default rootReducer;
