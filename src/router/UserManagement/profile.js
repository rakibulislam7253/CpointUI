export default [
  {
    path: "/profile",
    component: () =>
      import(
        /* webpackChunkName: 'ProfileView' */ "../../views/ProfileView.vue"
      ),
    // redirect: "/profile/view",
    children: [
      {
        path: "/view",
        component: () =>
          import(
            /* webpackChunkName: 'ProfileInfoView' */ "../../components/profile/profile-view"
          ),
      },
      {
        path: "/change-password",
        component: () =>
          import(
            /* webpackChunkName: 'ChangePasswordView' */ "../../components/UserManagement/forgot-password.vue"
          ),
      },
    ],
    meta: {
      title: "Profile",
    },
  },
];
