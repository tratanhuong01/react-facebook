import { createContext, useReducer } from "react";
import * as actions from "./Action";
import AppReducer from "./AppReducer";

const initialState = {
    mode: -1,
    content: "",
    color: null,
    data: null,
    audio: null,
};

export const StoryEditorContext = createContext();

export const StoryEditorProvider = (props) => {
    //
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //
    return (
        <StoryEditorContext.Provider value={
            {
                storyEditor: state,
                storyEditorsDispatch: dispatch,
                storyEditorsAction: actions
            }
        }>
            {props.children}
        </StoryEditorContext.Provider>
    )
}