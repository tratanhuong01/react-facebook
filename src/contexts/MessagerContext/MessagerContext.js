import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import * as actions from "./Action";

const initialState = {
    left: [],
    right: null,
    groupMessage: null,
    usersList: null,
}

export const MessengerContext = createContext();

export const MessengerProvider = (props) => {
    //
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //
    return (
        <MessengerContext.Provider value={
            {
                messenger: state,
                messengersAction: actions,
                messengersDispatch: dispatch
            }
        }>
            {props.children}
        </MessengerContext.Provider>
    )
}