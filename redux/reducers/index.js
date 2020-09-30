import { combineReducers } from 'redux'
import axios from "axios";

const initialState = {
  userinfo: []
};


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "USER_INFO":
      return { ...state, userinfo: action.payload };
    default:
      return state;
  }
};
export default combineReducers({
  reducer
});
