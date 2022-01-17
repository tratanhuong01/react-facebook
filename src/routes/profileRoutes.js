import FriendList from "../components/Profile/FriendList/FriendList";
import ImageVideoList from "../components/Profile/ImageVideoList/ImageVideoList";
import MainProfile from "../components/Profile/MainProfile/MainProfile";
import StoryList from "../components/Profile/StoryList/StoryList";

const routes = [
    {
        path: `/friends`,
        exact: false,
        element: <FriendList />
    },
    {
        path: `/images`,
        exact: false,
        element: <ImageVideoList image={true} />
    },
    {
        path: `/videos`,
        exact: false,
        element: <ImageVideoList />
    },
    {
        path: `/stories`,
        exact: false,
        element: <StoryList />
    },
    {
        path: ``,
        exact: false,
        element: <MainProfile />
    },
];

export default routes;
