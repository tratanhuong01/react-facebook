import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import * as actions from "./Action";

const initialState = {
    userProfile: null,
    isFriend: false
};

export const UserProfileContext = createContext();

export const UserProfileProvider = (props) => {
    //
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //
    return (
        <UserProfileContext.Provider value={{
            userProfile: state,
            userProfilesDispatch: dispatch,
            userProfilesAction: actions
        }}>
            {props.children}
        </UserProfileContext.Provider>
    )
}