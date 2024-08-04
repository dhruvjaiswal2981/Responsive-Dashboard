// src/store/dataReducer.js
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actions';

const initialState = {
  activityFeed: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, activityFeed: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
