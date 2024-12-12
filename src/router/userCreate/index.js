export default [
  {
    path: "/createUser",
    name: "user_create",
    component: () =>
      import(
        /* webpackChunkName: 'PassThroughPanel' */ "../../components/userCreate/UserCreate.vue"
      ),
    meta: {
      title: "user_create",
    },
  },
];
