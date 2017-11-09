import { combineReducers } from "redux";
import comments from "./comments";
import users from "./users"   //not implemented

const app = combineReducers({
    comments,
    users                     //not implemented
});