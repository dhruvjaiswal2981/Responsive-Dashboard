// src/store/actions.js
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch('/mock-api/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
  }
};
