/* eslint-disable func-call-spacing */
/* eslint-disable space-in-parens */
/* eslint-disable indent */
import LoginService from "./login";
import ProfileService from "./profile";
export default [
  ...LoginService,
  ...ProfileService,

  // User Info
  {
    path: "/user_list",
    component: () =>
      import(
        /* webpackChunkName: 'UserInfo' */ "../../components/UserManagement/user-list"
      ),
    meta: {
      title: "Users",
    },
  },
  // eslint-disable-next-line eol-last
];
