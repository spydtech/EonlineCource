import axios from 'axios';
import { API_BASE_URL } from '../../Config/ApiConfig';
import {
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
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

const token = localStorage.getItem('jwt');

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem('jwt', user.jwt);
    }
    console.log('user', user);
    dispatch(registerSuccess(user.jwt));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest);

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem('jwt', user.jwt);
    }
    console.log('user', user);
    dispatch(loginSuccess(user.jwt));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());

  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    console.log('user data', user);

    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};


const updateAccountRequest = () => ({ type: UPDATE_ACCOUNT_REQUEST });
const updateAccountSuccess = (updatedAccount) => ({ type: UPDATE_ACCOUNT_SUCCESS, payload: updatedAccount });
const updateAccountFailure = (error) => ({ type: UPDATE_ACCOUNT_FAILURE, payload: error });

// export const updateAccount = (accountData) => async (dispatch) => {
//   dispatch(updateAccountRequest());
//   const jwtToken = localStorage.getItem('jwt');
//   try {
//     const response = await axios.put(`${API_BASE_URL}/api/users/updateUserDetails`, accountData, {
//       headers: { Authorization: `Bearer ${jwtToken}` },
//     });
//     const updatedAccount = response.data;
//     dispatch(updateAccountSuccess(updatedAccount));
//     // Optionally, dispatch an action to refresh user details or update the state
//   } catch (error) {
//     dispatch(updateAccountFailure(error.message));
//   }
// };

export const updateAccount = (jwt, accountData) => async (dispatch) => {
  dispatch(updateAccountRequest());
  try {
    const response = await axios.put('http://localhost:8082/api/users/updateUserDetails', accountData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const updatedAccount = response.data;
    console.log('Account details updated successfully');
    dispatch(updateAccountSuccess(updatedAccount));
    // Optionally, dispatch an action or update state in Redux
  } catch (error) {
    dispatch(updateAccountFailure(error.message));
    // Handle error (e.g., show error message to the user)
  }
};

export const logout = (token) => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
  };
};
