import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

const initialState = {
  isAuthenticated: false,
  id:"",
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_CURRENT_USER_SUCCESS":
      return {
        isAuthenticated: !isEmpty(action.response),
        id:get(action,"response.id"),
      };
    case "SET_CURRENT_USER_FAILTURE":
      return {
        isAuthenticated: false,
        id:"",
      };
    case "DELETE_CURRENT_USER_SUCCESS":
      return {
        isAuthenticated: false,
        id:"",
      };
    case "DELETE_CURRENT_USER_FAILTURE":
      return {
        isAuthenticated: true,
        id:get(action,"response.id"),
      };

    default:
      return state;
  }
};

