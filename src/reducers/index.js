import { combineReducers } from "redux";
import socket from "./socket";
import user from "./user";
import headers from "./headers";

const myReducer = combineReducers({
  user,
  socket,
  headers,
});

export default myReducer;
