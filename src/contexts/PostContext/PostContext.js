import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import * as actions from "./Action";
import ModalPost from "../../components/Modals/ModalPost/ModalPost";

const initialState = {
    tags: [],
    local: null,
    feel: null,
    activity: null,
    content: "",
    imageVideo: [],
    component: <ModalPost />,
    modePost: 0,
    background: null,
    usingBackground: null
};

export const PostContext = createContext();

export const PostProvider = (props) => {
    //
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //
    return (
        <PostContext.Provider value={{
            posts: state,
            postsDispatch: dispatch,
            postsAction: actions
        }}>
            {props.children}
        </PostContext.Provider>
    )
}