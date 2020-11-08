import { combineReducers } from 'redux'
import axios from "axios";

const initialState = {
  userinfo: null,
  homeLoadingState:true
};


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "USER_INFO":
      return { ...state, userinfo: action.payload };
    case "HOME_STATE":
      return { ...state, homeLoadingState: action.payload };
    default:
      return state;
  }
};
export default combineReducers({
  reducer
});
