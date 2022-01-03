import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import * as actions from "./Action";

const initialState = {
    current: null,
    isPlaying: true,
    indexStory: 0,
    timeCurrent: 0,
    main: null,
    indexRun: 0,
    show: false,
    storyList: []
};

export const StoryContext = createContext();

export const StoryProvider = (props) => {
    //
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //
    return (
        <StoryContext.Provider value={{
            stories: state,
            storiesDispatch: dispatch,
            storiesAction: actions
        }}>
            {props.children}
        </StoryContext.Provider>
    )
}
