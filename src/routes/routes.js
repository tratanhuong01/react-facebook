import * as Config from "../constants/Config";
import Login from "../pages/Login";
import Call from "../pages/Call";
import ForgetAccount from "../pages/Auth/ForgetAccount";
import RecoverAccount from "../pages/Auth/RecoverAccount";
import VerifyCodeAccount from "../pages/Auth/VerifyCodeAccount";
import TypeNewPassword from "../pages/Auth/TypeNewPassword";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import WrapperStory from "../pages/Story/WrapperStory";
import ViewStory from "../pages/Story/ViewStory";
import Watch from "../pages/Watch";
import NotFound from "../pages/NotFound";
import Messenger from "../pages/Messenger";

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
    path: Config.PAGE_VERIFY_CODE_ACCOUNT_RECOVER,
    exact: true,
    element: <VerifyCodeAccount verifyAccountNew={false} />
  },
  {
    path: Config.PAGE_VERIFY_CODE_ACCOUNT_REGISTER,
    exact: true,
    element: <VerifyCodeAccount verifyAccountNew={true} />
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
    path: `${Config.PAGE_PROFILE}/:id`,
    exact: true,
    element: <Profile />
  },
  {
    path: Config.PAGE_CREATE_STORY,
    exact: true,
    element: <WrapperStory mode={-1} />
  },
  {
    path: Config.PAGE_CREATE_STORY + "/text",
    exact: true,
    element: <WrapperStory mode={0} />
  },
  {
    path: Config.PAGE_CREATE_STORY + "/image",
    exact: true,
    element: <WrapperStory mode={1} />
  },
  {
    path: Config.PAGE_STORY,
    exact: true,
    element: <ViewStory />
  },
  {
    path: Config.PAGE_WATCH,
    exact: true,
    element: <Watch />
  },
  {
    path: Config.PAGE_MESSENGER,
    exact: true,
    element: <Messenger />
  },
  {
    path: "*",
    exact: true,
    element: <NotFound />
  },
];

export default routes;
