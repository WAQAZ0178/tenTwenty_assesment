import {
  SET_PROFILE_INFO,
  SET_USER_TYPE,
  SET_SIGNUP_INFO,
  SET_ISLOGIN,
} from './actionTypes';
const setProfileInfo = payload => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_PROFILE_INFO,
      payload,
    });
  };
};
const setUserType = payload => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_USER_TYPE,
      payload,
    });
  };
};
const setSignupInfo = payload => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_SIGNUP_INFO,
      payload,
    });
  };
};

const setIsLogin = payload => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_ISLOGIN,
      payload,
    });
  };
};

export const ACTIONS = {
  setProfileInfo,
  setUserType,
  setSignupInfo,
  setIsLogin,
};
