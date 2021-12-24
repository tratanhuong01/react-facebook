import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import * as actions from "./Action";
import stories from "../../config/stories";

const initialState = {
    current: stories[0],
    isPlaying: true,
    indexStory: 0,
    timeCurrent: 0,
    main: stories[0].imageList[0],
    indexRun: 0,
    show: false
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
