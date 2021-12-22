import * as Config from "../constants/Config";
import Login from "../pages/Login";
import Call from "../pages/Call";
import ForgetAccount from "../pages/Auth/ForgetAccount";
import RecoverAccount from "../pages/Auth/RecoverAccount";
import VerifyCodeAccount from "../pages/Auth/VerifyCodeAccount";
import TypeNewPassword from "../pages/Auth/TypeNewPassword";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import CreateStory from "../pages/CreateStory";
import StoryEditor from "../pages/StoryEditor";
import Story from "../pages/Story";

const routes = [
  {
    path: Config.PAGE_LOGIN,
    exact: true,
    element: <Login />,
  },
  {
    path: Config.PAGE_CALL,
    exact: true,
    element: <Call />
  },
  {
    path: Config.PAGE_FORGET_ACCOUNT,
    exact: true,
    element: <ForgetAccount />
  },
  {
    path: Config.PAGE_RECOVER_ACCOUNT,
    exact: true,
    element: <RecoverAccount />
  },
  {
    path: Config.PAGE_VERIFY_CODE_ACCOUNT,
    exact: true,
    element: <VerifyCodeAccount />
  },
  {
    path: Config.PAGE_TYPE_NEW_PASSWORD,
    exact: true,
    element: <TypeNewPassword />
  },
  {
    path: Config.PAGE_HOME,
    exact: true,
    element: <Home />
  },
  {
    path: Config.PAGE_PROFILE,
    exact: true,
    element: <Profile />
  },
  {
    path: Config.PAGE_CREATE_STORY,
    exact: true,
    element: <CreateStory />
  },
  {
    path: Config.PAGE_STORY_EDITOR,
    exact: true,
    element: <StoryEditor />
  },
  {
    path: Config.PAGE_STORY,
    exact: true,
    element: <Story />
  },
  {
    path: "",
    exact: true,
    element: ""
  },
];

export default routes;
