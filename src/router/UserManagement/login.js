export default [
  // Login
  {
    path: "/login",
    component: () =>
      import(
        /* webpackChunkName: 'LoginTemplate' */ "../../layout/nav/LoginView.vue"
      ),
    meta: {
      title: "Login",
    },
  },
  // Forgot Password
  {
    path: "/forgot-password",
    component: () =>
      import(
        /* webpackChunkName: 'LoginTemplate' */ "../../components/UserManagement/forgot-password.vue"
      ),
    meta: {
      title: "Forgot Password",
    },
  },
  // Reset Password
  {
    path: "/reset-password/:userid",
    component: () =>
      import(
        /* webpackChunkName: 'LoginTemplate' */ "../../components/UserManagement/reset-password.vue"
      ),
    meta: {
      title: "Reset Password",
    },
  },
];
