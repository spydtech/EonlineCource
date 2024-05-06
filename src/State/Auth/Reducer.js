import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGOUT,
  GET_ACCOUNT_REQUEST,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILURE,
  UPDATE_ACCOUNT_REQUEST,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAILURE,
} from './ActionType';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  customers: [],
};
export const authReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case GET_ACCOUNT_REQUEST: // Add GET_ACCOUNT_REQUEST case
    case UPDATE_ACCOUNT_REQUEST: // Add UPDATE_ACCOUNT_REQUEST case
      return { ...state, isLoading: true, error: null };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, error: null, jwt: action.payload };
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, error: null, user: action.payload };
    case GET_ACCOUNT_SUCCESS:
      return { ...state, isLoading: false, error: null, account: action.payload }; // Add GET_ACCOUNT_SUCCESS case
    case UPDATE_ACCOUNT_SUCCESS:
      return { ...state, isLoading: false, error: null, account: action.payload }; // Add UPDATE_ACCOUNT_SUCCESS case
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
    case GET_ACCOUNT_FAILURE: // Add GET_ACCOUNT_FAILURE case
    case UPDATE_ACCOUNT_FAILURE: // Add UPDATE_ACCOUNT_FAILURE case
      return { ...state, isLoading: false, error: action.payload };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};
