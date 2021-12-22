import { combineReducers } from "redux";
import socket from "./socket";

const myReducer = combineReducers({
  socket,
});

export default myReducer;
