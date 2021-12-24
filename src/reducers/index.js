import { combineReducers } from "redux";
import socket from "./socket";
import user from "./user";

const myReducer = combineReducers({
  user,
  socket,
});

export default myReducer;
