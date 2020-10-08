import { combineReducers } from "redux";
import research from "./researchReducer";
import alert from "./alert";

export default combineReducers({ research, alert });
