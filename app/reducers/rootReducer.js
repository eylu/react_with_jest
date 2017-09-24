import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import auth from "./auth";
import storage from "./storage";

const rootReducer = combineReducers({
 routing: routerReducer,
 auth,
 storage,
});

export default rootReducer;
