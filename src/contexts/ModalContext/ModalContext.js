import { createContext, useReducer } from "react";
import * as actions from "./Action";
import AppReducer from "./AppReducer";

const initialState = {
    loading: false,
    data: null,
    popover: true,
};

export const ModalContext = createContext();

export const ModalProvider = (props) => {
    //
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //
    return (
        <ModalContext.Provider value={{
            modals: state,
            modalsAction: actions,
            modalsDispatch: dispatch
        }}>
            {props.children}
        </ModalContext.Provider>
    );
}
