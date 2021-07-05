import { combineReducers } from "redux";
import authreducers from "./authreducers";
import homereducers from "./homereducers";
export default combineReducers ({
    
    homereducers,
    authreducers
 
 })