import { combineReducers } from "redux";
import socket from "./socket";
import user from "./user";
import headers from "./headers";
import userChat from "./userChat";

const myReducer = combineReducers({
  user,
  socket,
  headers,
  userChat
});

export default myReducer;
