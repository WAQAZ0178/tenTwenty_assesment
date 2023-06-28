import * as Actions from './actionTypes';
const INITIAL_STATE = {
  profileInfo: {},
  language: 'eng',
  userType: '',
  signupInfo: {},
  isLogin: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.SET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: action.payload,
      };
    case Actions.SET_USER_TYPE:
      return {
        ...state,
        userType: action.payload,
      };
    case Actions.SET_SIGNUP_INFO:
      return {
        ...state,
        signupInfo: action.payload,
      };
    case Actions.SET_ISLOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};
