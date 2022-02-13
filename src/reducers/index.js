import { combineReducers } from "redux";
import socket from "./socket";
import user from "./user";
import headers from "./headers";
import userChat from "./userChat";
import posts from "./posts";

const myReducer = combineReducers({
  user,
  socket,
  headers,
  userChat,
  posts
});

export default myReducer;
