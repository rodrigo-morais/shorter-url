import {
  REQUESTED_URLS,
  RECEIVED_URLS,
  FAILED_URLS,
  ADD_URL,
} from './constants';

const initialState = {
  data: {
    urls: null,
    loading: false,
    error: false,
  },
};

const shorterUrlPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_URLS:
      return { ...state, ...{ loading: true, error: false, data: null } };

    case RECEIVED_URLS:
      return { ...state, ...{ loading: false, data: action.data, error: false } };

    case FAILED_URLS:
      return { ...state, ...{ loading: false, error: true, data: null } };

    case ADD_URL:
      return { ...state, ...{ data: [...state.data, action.data] } };

    default:
      return state;
  }
};

export default shorterUrlPageReducer;
